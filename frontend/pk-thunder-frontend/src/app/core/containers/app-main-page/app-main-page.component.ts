import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { MenuService } from '../../services/app.menu.service';

@Component({
  selector: 'app-app-main-page',
  templateUrl: './app-main-page.component.html',
})
export class AppMainPageComponent {
  overlayMenuActive: boolean | undefined;
  staticMenuDesktopInactive: boolean | undefined = false;
  staticMenuMobileActive: boolean | undefined;
  sidebarActive: boolean | undefined = true;
  sidebarStatic: boolean | undefined = true;
  menuClick: boolean | undefined;
  menuHoverActive: boolean | undefined = false ;
  topbarMenuActive: boolean | undefined;
  topbarItemClick: boolean | undefined;
  activeTopbarItem: any | undefined;
  configActive: boolean | undefined;
  configClick: boolean | undefined;
  rightMenuActive: boolean | undefined;
  rightMenuClick: boolean | undefined;
  searchActive: boolean | undefined;
  searchClick: boolean | undefined;
  activeInlineProfile: boolean | undefined;
  pinActive = true as boolean | undefined;

  constructor(
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent) {}

  onLayoutClick() {
      if (!this.topbarItemClick) {
          this.activeTopbarItem = null;
          this.topbarMenuActive = false;
      }

      if (this.configActive && !this.configClick) this.configActive = false;
      if (this.rightMenuActive && !this.rightMenuClick) this.rightMenuActive = false;
      if (this.searchActive && !this.searchClick) this.searchActive = false;

      if (!this.menuClick) {
          if ((this.isSlim() || this.isHorizontal()) && !this.isMobile()) {
              this.menuService.reset();
              this.menuHoverActive = false;
          }

          if (this.overlayMenuActive || this.staticMenuMobileActive) {
              this.overlayMenuActive = false;
              this.staticMenuMobileActive = false;
          }
      }

      this.configClick = false;
      this.rightMenuClick = false;
      this.searchClick = false;
      this.menuClick = false;
      this.topbarItemClick = false;
  }

  onSidebarClick($event: Event) {
      this.menuClick = true;
  }

  onToggleMenu(event: Event) {
      this.menuClick = true;
      if (this.overlayMenuActive) this.overlayMenuActive = false;
      if (this.sidebarActive) this.sidebarStatic = !this.sidebarStatic;
      if (event !== null) event.preventDefault();
  }

  onSidebarMouseOver(event: Event) {
      if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
          this.sidebarActive = this.isDesktop();
          setTimeout(() => {
              this.pinActive = this.isDesktop();
          }, 200);
      }
  }

  onSidebarMouseLeave($event: Event) {
      if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
          setTimeout(() => {
              this.sidebarActive = false;
              this.pinActive = false;
          }, 250);
      }
  }

  onMenuButtonClick(event: Event) {
      this.menuClick = true;
      
      if (this.isOverlay()) this.overlayMenuActive = !this.overlayMenuActive;
      if (this.isDesktop()) this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
      else this.staticMenuMobileActive = !this.staticMenuMobileActive;
      
      event.preventDefault();
  }

  onTopbarItemClick(event: Event, item: any) {
      this.topbarItemClick = true;

      if (this.activeTopbarItem === item) this.activeTopbarItem = null;
      else this.activeTopbarItem = item;

      event.preventDefault();
  }

  onTopbarSubItemClick(event: Event) {
      event.preventDefault();
  }

  onRippleChange(event: any) {
      this.app.ripple = event.checked;
      this.primengConfig.ripple = event.checked;
  }

  onConfigClick(event: Event) {
      this.configClick = true;
  }

  onRightMenuButtonClick() {
      this.rightMenuClick = true;
      this.rightMenuActive = true;
  }

  onRightMenuClick($event: Event) {
      this.rightMenuClick = true;
  }

  isStatic() {
      return this.app.menuMode === 'static';
  }

  isOverlay() {
      return this.app.menuMode === 'overlay';
  }

  isSlim() {
      return this.app.menuMode === 'slim';
  }

  isHorizontal() {
      return this.app.menuMode === 'horizontal';
  }

  isSidebar() {
      return this.app.menuMode === 'sidebar';
  }

  isDesktop() {
      return window.innerWidth > 991;
  }

  isMobile() {
      return window.innerWidth <= 991;
  }

}
