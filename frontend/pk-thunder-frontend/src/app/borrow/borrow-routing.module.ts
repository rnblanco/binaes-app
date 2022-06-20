import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowPageComponent } from './containers/borrow-page/borrow-page.component';

const routes: Routes = [
  { path: '', component: BorrowPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowRoutingModule {}
