import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './containers/events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsPageComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
