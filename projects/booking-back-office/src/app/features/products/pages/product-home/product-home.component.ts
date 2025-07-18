import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-home',
  imports: [
    RouterOutlet
  ],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent {

   private readonly router=inject(Router);

   list(){
        this.router.navigate(["home/warehouse/products/list"])
    }
}
