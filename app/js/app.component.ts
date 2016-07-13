import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'gs-app',
    template: `
        <div>
            <h2>{{ pageTitle }}</h2>
            <gs-products></gs-products>
        </div>
    `,
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = "My Angular 2 App";
}