import { provideRouter, RouterConfig } from '@angular/router';

import { ProductDetailComponent, ProductListComponent } from './products';

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