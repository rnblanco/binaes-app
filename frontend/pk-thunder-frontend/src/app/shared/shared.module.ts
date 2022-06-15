import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDblClickDirective } from './directives/no-dbl-click.directive';

@NgModule({
  declarations: [
    NoDblClickDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NoDblClickDirective
  ]
})
export class SharedModule { }
