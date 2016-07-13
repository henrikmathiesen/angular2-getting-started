import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'gs-app',
    template: `
        <div>
            <h2>{{ pageTitle }}</h2>
            <gs-products></gs-products>
            <div>
                <button class="btn btn-success">Success</button>
            </div>
            <div>
                <button class="btn btn-danger">Danger</button>
            </div>
            <div>
                <button class="btn btn-warning">Warning</button>
            </div>
        </div>
    `,
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle: string = "My Angular 2 App";
}