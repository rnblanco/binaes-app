import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'app-log-out-page',
  templateUrl: './log-out-page.component.html',
  styleUrls: ['./log-out-page.component.scss']
})
export class LogOutPageComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.authService.signOut();
  }
}
