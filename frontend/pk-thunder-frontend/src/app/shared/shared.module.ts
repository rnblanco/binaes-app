import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDblClickDirective } from './directives/no-dbl-click.directive';
import { AddOrEditPipe } from './pipes/add-or-edit.pipe';

@NgModule({
	declarations: [
		NoDblClickDirective,
		AddOrEditPipe,
	],
  imports: [
    CommonModule
  ],
	exports: [
		NoDblClickDirective,
		AddOrEditPipe,
	]
})
export class SharedModule { }
