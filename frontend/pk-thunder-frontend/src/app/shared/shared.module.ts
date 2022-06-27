import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDblClickDirective } from './directives/no-dbl-click.directive';
import { AddOrEditPipe } from './pipes/add-or-edit.pipe';
import { TagPipe } from './pipes/tag.pipe';
import { PhotoPipe } from './pipes/photo.pipe';

@NgModule({
	declarations: [
		NoDblClickDirective,
		AddOrEditPipe,
		PhotoPipe,
		TagPipe
	],
  imports: [
    CommonModule
  ],
	exports: [
		NoDblClickDirective,
		AddOrEditPipe,
		PhotoPipe,
		TagPipe
	]
})
export class SharedModule { }
