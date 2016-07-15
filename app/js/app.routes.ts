import { provideRouter, RouterConfig } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

const routes: RouterConfig = [
    { 
        path: '',
        component: ProductListComponent,
        
    },
    {
        path: 'product',
        component: ProductDetailComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];