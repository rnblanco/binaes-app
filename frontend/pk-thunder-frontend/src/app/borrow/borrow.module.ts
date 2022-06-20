import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowRoutingModule } from './borrow-routing.module';
import { BorrowPageComponent } from './containers/borrow-page/borrow-page.component';

@NgModule({
  declarations: [
    BorrowPageComponent
  ],
  imports: [
    CommonModule,
    BorrowRoutingModule
  ]
})
export class BorrowModule { }
