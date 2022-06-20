import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BaseComponent } from './base.component';

@Component({
  template: '',
})
export abstract class LazyComponent extends BaseComponent {
  pagination: any = {};
  currentPage = 1;
  rows = 10;
  sortField: string = '';
  sortOrder: number = 0;
  globalFilter: string = '';
  list: any[] = [];
  selectedList: any;

  protected constructor() {
    super();
  }

  getPaginationParams(): void {
    this.httpParams = new HttpParams()
      .set('limit', this.rows || 10)
      .set('page', this.currentPage || 1)
      .set('search', this.globalFilter || '')
      .set(
        'sortBy',
        this.sortField
          ? `${this.sortField}:${this.sortOrder === 1 ? 'ASC' : 'DESC'}`
          : ''
      )
      .set('filter.active', '$eq:true');
  }

  paginate({ first, globalFilter, rows, sortField, sortOrder }: {first: number, globalFilter: string, rows: number, sortField: string, sortOrder: number}): void {
    if (rows) this.rows = rows;
    if (sortField) this.sortField = sortField;
    if (sortOrder) this.sortOrder = sortOrder;
    if (globalFilter || globalFilter === '') this.globalFilter = globalFilter;
    this.currentPage = first / this.rows + 1;
  }
}
