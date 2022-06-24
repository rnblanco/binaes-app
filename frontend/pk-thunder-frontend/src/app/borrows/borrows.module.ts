import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowsRoutingModule } from './borrows-routing.module';
import { BorrowPageComponent } from './containers/borrow-page/borrow-page.component';
import { BorrowsPageComponent } from './containers/borrows-page/borrows-page.component';

@NgModule({
  declarations: [
    BorrowPageComponent,
    BorrowsPageComponent
  ],
  imports: [
    CommonModule,
    BorrowsRoutingModule
  ]
})
export class BorrowsModule { }
