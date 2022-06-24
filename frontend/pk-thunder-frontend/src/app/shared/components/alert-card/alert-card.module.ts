import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCardComponent } from './alert-card.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AlertCardComponent],
	imports: [
		CommonModule,
		ButtonModule
	],
  exports: [AlertCardComponent],
})
export class AlertCardModule {}
