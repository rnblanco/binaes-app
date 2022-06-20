import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomModalComponent } from './custom-modal.component';
import { FormDirective } from './form.directive';


@NgModule({
  declarations: [
    CustomModalComponent,
    FormDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    CustomModalComponent
  ],
  providers: []
})
export class CustomModalModule { }
