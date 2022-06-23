import { Component, OnInit } from '@angular/core';
import { RouteInformation } from 'src/app/shared/constants/route-information';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styles: [''],
})
export class NotFoundPageComponent implements OnInit {
  loading = true;
  routeInformation = RouteInformation;
  
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
