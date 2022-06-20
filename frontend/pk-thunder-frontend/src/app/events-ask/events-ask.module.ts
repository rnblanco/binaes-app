import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsAskPageComponent } from './containers/events-ask-page/events-ask-page.component';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
  declarations: [
    EventsAskPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsAskModule { }
