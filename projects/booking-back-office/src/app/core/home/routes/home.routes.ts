import { Routes } from "@angular/router";
import { HomePanelComponent } from "../home.panel/home.panel.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

export const HOME_ROUTES: Routes = [
  {

    path: '', component: HomePanelComponent,

    children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'warehouse/products',
          loadChildren: () => import('../../../features/products/routes/products.routes').then(m => m.PRODUCTS_ROUTES)
        },

        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }
    ]

  }
];
