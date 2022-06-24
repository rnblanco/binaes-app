import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCardComponent } from './table-card.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { AlertCardModule } from '../alert-card/alert-card.module';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { FileUploadModule } from 'primeng/fileupload';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [TableCardComponent],
	imports: [
		CommonModule,
		TableModule,
		FormsModule,
		InputTextModule,
		MultiSelectModule,
		DropdownModule,
		SharedModule,
		FormsModule,
		ButtonModule,
		AvatarModule,
		ProgressBarModule,
		ChipModule,
		RatingModule,
		AlertCardModule,
		SkeletonModule,
		ReactiveFormsModule,
		FileUploadModule,
		RouterModule,
		RippleModule
	],
  exports: [TableCardComponent],
})
export class TableCardModule {}
