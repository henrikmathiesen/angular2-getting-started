import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // Load the library but dont import anything - we can then use the operators like .map

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

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
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS] // these instances is shared down the app
})
export class AppComponent {
    pageTitle: string = "My Angular 2 App";
}