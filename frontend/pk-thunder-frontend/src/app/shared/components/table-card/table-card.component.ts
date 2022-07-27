import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { Table } from 'primeng/table';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BaseComponent } from '../base.component';
import { FileUpload } from 'primeng/fileupload';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent
  extends BaseComponent
  implements OnInit, AfterContentInit, OnChanges
{
  @Input() customClass = 'card';
  @Input() globalFilter: string;
  @Input() pagination: any = {};
  @Input() type: string;
  @Input() loading: boolean;
  @Input() list: any[];
  @Input() newButtonLabel = 'Botón' as string;
  @Input() showNewButton = true as boolean;
  @Input() editColumnFrozen = false as boolean;
  @Input() editColumnWidth: number;
  @Input() selected: any;
  @Input() cols: any[];
  @Input() totalRows = 5;
  @Input() rows = 10;
  @Input() reloading = false;
  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  @Output() onRowSelect: EventEmitter<any> = new EventEmitter();
  @Output() onRowUnselect: EventEmitter<any> = new EventEmitter();
  @Output() onEditClick: EventEmitter<any> = new EventEmitter();
  @Output() onNewClick: EventEmitter<any> = new EventEmitter();
  @ContentChildren(PrimeTemplate) templates: QueryList<any>;
  @ViewChild(Table) private dataTable: Table;

  form: UntypedFormGroup;
  bodyTemplate: TemplateRef<any>;
  editColumnTemplate: TemplateRef<any>;
  headerFilterTemplate: TemplateRef<any>;
  hasData = false;
  listSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.user = this.authService.storagedUser;
    this.hasData = this.pagination?.totalItems > this.rows;
    this.form = new UntypedFormGroup({
      search: new UntypedFormControl(''),
    });
    this.form.controls.search.setValue(this.globalFilter);
    this.textDebounce();
  }
  
  resetSearch(){
    this.form.controls.search.setValue('');
  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'editColumn':
          this.editColumnTemplate = item.template;
          break;
        case 'headerFilter':
          this.headerFilterTemplate = item.template;
          break;
      }
    });
  }

  ngOnChanges(): void {
    this.hasData = this.pagination?.totalItems > this.rows;
  }

  textDebounce() {
    // Subscribe to searchBox change and debounce to typing
    this.subscription.add(
      this.form.controls.search.valueChanges
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe((globalFilter) => {
          this.dataTable.onLazyLoad.emit({ globalFilter });
        })
    );
  }

  lazyLoading(event: any) {
    const { filters, multiSortMeta, ...all } = event;
    this.onLazyLoad.emit(all);
  }

  onRowTableSelect(event: any) {
    this.selectedChange.emit(this.selected);
    this.onRowSelect.emit(event);
  }

  onNewButtonClick() {
    this.onNewClick.emit();
  }
}
