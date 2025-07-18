import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'auth',
    //path:'',
    loadChildren: () => import('./core/auth/routes/auth.routes').then(m => m.AUTH_ROUTES)
  },

  {
    path: 'home',
    loadChildren: () => import('./core/home/routes/home.routes').then(m => m.HOME_ROUTES)
  },

  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  }

]
