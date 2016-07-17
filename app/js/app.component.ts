import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';         // We import HTTP_PROVIDERS (an array of services), as convinience we can then use services like Http and response throughout our app
import 'rxjs/Rx';                                       // Load the library but dont import anything - we can then use the operators like .map
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from './products/product.service';

@Component({
    selector: 'gs-app',
    template: `
        <div>
            <h2>{{ pageTitle }}</h2>
            <hr />
            <nav>
                <a [routerLink]="['']">Products</a>
                <a [routerLink]="['/product']">Product</a>
            </nav>
            <hr />
            <router-outlet></router-outlet>
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
    directives: [ROUTER_DIRECTIVES],
    // these instances is shared down the app, a providers array further bellow that requires one of these will provide a new instance
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = "My Angular 2 App";
}