import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInformation } from '../../constants/route-information';

@Component({
  selector: 'alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss']
})
export class AlertCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;
  @Input() height = 400 as number;
  @Input() showBackButton = false as boolean;
  @Input() showLogoutButton = false as boolean;
  @Output() onLogOut: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private readonly router: Router,) {
  }
  
  ngOnInit(): void {
  }

  back(_event: any) {
    this.router.navigate([RouteInformation.dashboardPage])
  }

  logOut(_event: any) {
    this.onLogOut.emit(_event);
    _event.preventDefault();
  }
  
}
