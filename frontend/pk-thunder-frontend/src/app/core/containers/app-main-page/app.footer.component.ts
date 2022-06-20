import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <span class="copyright center">&copy; Copyright {{year}} - {{appName}} - {{version}}</span>
        </div>
    `
})
export class AppFooterComponent extends BaseComponent {
    constructor() { super(); }
}
