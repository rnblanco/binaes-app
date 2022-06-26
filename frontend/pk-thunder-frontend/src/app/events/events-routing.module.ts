import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { EventsPageComponent } from './containers/events-page/events-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
  },
  {
    path: 'event',
    component: EventPageComponent,
  },
  {
    path: 'event/:id',
    component: EventPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
