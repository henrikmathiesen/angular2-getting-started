import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: require('./product-detail.component.html')
})
export class ProductDetailComponent implements OnInit {
    pageTitle = "Product detail";

    constructor(private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._route.params
            .subscribe((params) => {
                console.log(params["id"]);
            })
    }
}