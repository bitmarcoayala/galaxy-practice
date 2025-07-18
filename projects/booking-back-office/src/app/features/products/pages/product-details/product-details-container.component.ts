import { Component, inject } from '@angular/core';
import { ProductDetailsPresenterComponent } from '../../components/product-details.presenter/product-details.presenter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details-container',
  imports: [
    ProductDetailsPresenterComponent
  ],
  templateUrl: './product-details-container.component.html',
  styleUrl: './product-details-container.component.css'
})
export class ProductDetailsContainerComponent {

   private readonly router=inject(Router);

   save(){

   }

   //UI Logic
   


}
