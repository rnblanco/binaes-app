import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base.component';
import { FormItem } from './form-item';

@Component({
  template: '',
})
export class FormTemplate extends BaseComponent {
  @Input() payload: FormItem | undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();

  public object: any;
  public show: boolean = false;
  public isNew: boolean = true;
  public buttonDisabled = true;

  constructor() {
    super();
  }
}
