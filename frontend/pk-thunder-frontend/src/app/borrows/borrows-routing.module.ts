import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowsPageComponent } from './containers/borrows-page/borrows-page.component';
import { BorrowPageComponent } from './containers/borrow-page/borrow-page.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowsPageComponent,
  },
  {
    path: 'borrow',
    component: BorrowPageComponent,
  },
  {
    path: 'borrow/:id',
    component: BorrowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowsRoutingModule {}
