import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = '/api/productsToo.json';

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json().data)
            .do((data: any) => console.log(data)) // can peak at the data in the do() method
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(`Server Error: ${error.status}, ${error.statusText}. Call Batman!`);
    }
}