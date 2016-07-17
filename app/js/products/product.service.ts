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
            .map((response: Response) => <IProduct[]>response.json().data) // no {} will return the statement
            .do((data: any) => console.log(data)) // can peak at the data in the do() method
            .catch(this._handleError);
    }

    // Instead of returning an observable, we can return a promise by calling toPromise
    // We then have to have another catch block that does not return an observable
    getProductsPromise(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json().data)
            .toPromise()
            .catch((error: Response) => {  
                console.error(error);     // Same procedure as _handleError bellow
                return Promise.reject(`Server Error: ${error.status}, ${error.statusText}. Call Batman?`);
            });
    }

    // Handle error by logging the tech stuff, then forward a user friendly error message to caller for use in GUI
    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(`Server Error: ${error.status}, ${error.statusText}. Call Batman!`);
    }
}