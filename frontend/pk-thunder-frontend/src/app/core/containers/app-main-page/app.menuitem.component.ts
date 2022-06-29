import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppMainComponent } from './app.main.component';
import { MenuService } from '../../services/app.menu.service';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-menuitem]',
    /* tslint:enable:component-selector */
    template: `
        <ng-container>
            <a (click)="itemClick($event)" *ngIf="(item.routerLink && !item.items) && item.visible !== false" [ngClass]="item.class"
               [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink router-link-exact-active"
               [routerLinkActiveOptions]="matchOptions" [attr.target]="item.target" [attr.tabindex]="0" [attr.aria-label]="item.label" role="menuitem" pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span>{{item.label}}</span>
                <span class="p-tag p-badge ml-auto" *ngIf="item.badge">{{item.badge}}</span>
                <i class="pi pi-fw {{active ? 'pi-angle-up' : 'pi-angle-down'}} ml-auto" *ngIf="item.items"></i>
            </a>
        </ng-container>
    `,
    host: {
        '[class.layout-root-menuitem]': 'root',
        '[class.active-menuitem]': 'active',
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px'
            })),
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
              animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {
    
    @Input() item: any = {};
    @Input() index: number = 0;
    @Input() root: boolean = false;
    @Input() parentKey: string = '';
    menuSourceSubscription: Subscription;
    menuResetSubscription: Subscription;
    active: boolean = false;
    currentPath: string;
    key: string = '';
    activeRoute: boolean = false;
    
    matchOptions: IsActiveMatchOptions = {
        matrixParams: 'ignored',
        queryParams: 'ignored',
        paths: 'subset',
        fragment: 'ignored'
    }
    
    constructor(public app: AppMainComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });
        
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });
        
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((e: any) => {
            this.currentPath = e.url;
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            } else {
                this.active = false;
            }
        });
    }
    
    ngOnInit() {
        if (this.item.routerLink){
            this.currentPath = this.router.url;
            this.updateActiveStateFromRoute();
        }
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }
    
    updateActiveStateFromRoute() {
        this.active = this.currentPath.startsWith(this.item.routerLink[0]) ? true : false;
    }
    
    itemClick(event: Event) {
        event.stopPropagation();
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }
        
        // notify other items
        this.menuService.onMenuStateChange(this.key);
        
        // execute command
        if (this.item.command) this.item.command({originalEvent: event, item: this.item});
        
        // toggle active state
        if (this.item.items) this.active = !this.active;
        else {
            // activate item
            this.active = true;
            // hide overlay menus
            this.app.menuActiveMobile = false;
            if (this.app.isDesktop() && this.app.isOverlay()) this.app.menuInactiveDesktop = true;
        }
    }
    
    ngOnDestroy() {
        if (this.menuSourceSubscription) this.menuSourceSubscription.unsubscribe();
        if (this.menuResetSubscription) this.menuResetSubscription.unsubscribe();
    }
}
