import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Components
import { AppMainPageComponent } from './containers/app-main-page/app-main-page.component';
import { AppBreadcrumbComponent } from './containers/app-main-page/app.breadcrumb.component';
import { AppMenuComponent } from './containers/app-main-page/app.menu.component';
import { AppMenuitemComponent } from './containers/app-main-page/app.menuitem.component';
import { AppTopBarComponent } from './containers/app-main-page/app.topbar.component';
import { AppFooterComponent } from './containers/app-main-page/app.footer.component';
import { AppMainComponent } from './containers/app-main-page/app.main.component';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';

// Primeng modules
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppMainPageComponent,
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMainComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ]
})
export class CoreModule { }
