import { Component } from '@angular/core';

declare var require: any;

@Component({
    template: require('./product-detail.component.html')
})
export class ProductDetailComponent {
    pageTitle = "Product detail";
}