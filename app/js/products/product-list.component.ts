import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router'; // need ROUTER_DIRECTIVES to use directive links, need Router to navigate programatically

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { SomeLoops } from '../shared/some-loops';

const PAGE_TITLE: string = "Product List";

@Component({
    template: require('./product-list.component.html'),
    styles: [require('./product-list.component.less').toString()],
    directives: [StarComponent, ROUTER_DIRECTIVES],
    pipes: [ProductFilterPipe],
})
export class ProductListComponent implements OnInit {
    pageTitle: string = PAGE_TITLE;
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService, private _router: Router) {

    }

    ngOnInit(): void {

        // Mr Bell preferes doing Observables in the service, returning a promise and consume the promise here (_productService.getProductsPromise()) 

        // this._productService.getProducts()
        //     .subscribe(
        //     (products) => this.products = products,
        //     (error) => this.errorMessage = error
        //     );

        // this._productService.getProductsPromise()
        //     .then(
        //         (products) => this.products = products,
        //         (error) => this.errorMessage = error 
        //     );

        // It is best to catch here also (as well as in the service) it will then catch error INSIDE the success callback
        // An errorCallback like in the example above will NOT run if an error happens INSIDE the success callback
        // http://odetocode.com/blogs/scott/archive/2015/10/01/javascript-promises-and-error-handling.aspx
        this._productService.getProductsPromise()
            .then((products) => this.products = products)
            .catch((error) => this.errorMessage = error)

        SomeLoops.runThreeDifferentLoops();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message): void {
        this.pageTitle = PAGE_TITLE + " " + message;
    }

    navigateToDetail(product: IProduct) {
        this._router.navigate(['product', product.productId]);
    }
}