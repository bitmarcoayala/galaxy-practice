import { ProductListPresenterComponent } from '../components/product-list.presenter/product-list.presenter.component';
import { ProductDetailsContainerComponent } from '../pages/product-details/product-details-container.component';
import { ProductListContainerComponent } from '../pages/product-list/product-list.container.component';
import { ProductHomeComponent } from './../pages/product-home/product-home.component';
import { Routes } from '@angular/router';


export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    children: [
          {
            path: 'list',
            component: ProductListContainerComponent
          },
           {
            path: 'details',
            component: ProductDetailsContainerComponent
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }
      ]
  }

];

