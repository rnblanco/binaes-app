import { Component, OnInit, OnDestroy, Input,
  ComponentFactoryResolver, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormItem } from './form-item';
import { FormDirective } from './form.directive';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit, OnDestroy {

  @Input() form: FormItem | any;
  @ViewChild(FormDirective, {static: true})
  formHost!: FormDirective;

  @Output() formChange: EventEmitter<any> = new EventEmitter();

  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void  {
    if (this.form) this.loadComponent();
  }

  ngOnDestroy(): void  {}

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.form.component);
    const viewContainerRef = this.formHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: any = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance['payload'] = this.form;
    componentRef.instance['onCancel'].subscribe((_data: any) => {
      this.onCancel.emit(undefined);
      this.formChange.emit(undefined);
      this.formHost.viewContainerRef.clear();
    });
    componentRef.instance['onSave'].subscribe((_data: any) => {
      this.onSave.emit(_data);
      //When the onSave is empty, keep modal active. Otherwise, close it
      if(_data){
        this.formChange.emit(undefined);
        this.formHost.viewContainerRef.clear();
      }
    });
  }

}
