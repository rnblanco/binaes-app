import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowsPageComponent } from './containers/borrows-page/borrows-page.component';

const routes: Routes = [
  { path: '', component: BorrowsPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowsRoutingModule {}
