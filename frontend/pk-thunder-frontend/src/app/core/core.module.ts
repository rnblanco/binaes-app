import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Components
import { AppBreadcrumbComponent } from './containers/app-main-page/app.breadcrumb.component';
import { AppMenuComponent } from './containers/app-main-page/app.menu.component';
import { AppMenuitemComponent } from './containers/app-main-page/app.menuitem.component';
import { AppTopBarComponent } from './containers/app-main-page/app.topbar.component';
import { AppFooterComponent } from './containers/app-main-page/app.footer.component';
import { AppMainComponent } from './containers/app-main-page/app.main.component';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../components/loading/loading.module';

// Primeng modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CoreRoutingModule } from './core-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from '../shared/shared.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxKjuaModule } from 'ngx-kjua';
import { DropdownModule } from 'primeng/dropdown';
import { AreaSelectComponent } from '../areas/components/area-select.component';
import { InputMaskModule } from 'primeng/inputmask';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadFileComponent } from '../shared/components/upload-file.component';
import { DocumentationPageComponent } from './containers/documentation-page/documentation-page.component';

@NgModule({
  declarations: [
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMainComponent,
    ProfilePageComponent,
    DashboardPageComponent,
    QrCodeComponent,
    ProfileInfoComponent,
    PasswordChangeComponent,
    DocumentationPageComponent
  ],
	imports: [
		CommonModule,
		BreadcrumbModule,
		CoreRoutingModule,
		InputTextModule,
		ListboxModule,
		ButtonModule,
		RippleModule,
		MultiSelectModule,
		ImageModule,
		AvatarModule,
		QRCodeModule,
		FormsModule,
		LoadingModule,
		SharedModule,
		ZXingScannerModule,
		NgxKjuaModule,
		DropdownModule,
		InputMaskModule,
		ReactiveFormsModule,
		TabMenuModule,
		FileUploadModule
	],
	providers:[
		AreaSelectComponent,
		UploadFileComponent
	]
})
export class CoreModule { }
