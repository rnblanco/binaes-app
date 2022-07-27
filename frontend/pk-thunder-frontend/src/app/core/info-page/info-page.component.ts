import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
})
export class InfoPageComponent extends BaseComponent {
  
  constructor() {
    super();
  }

}
