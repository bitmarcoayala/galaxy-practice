import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details-presenter',
  imports: [
   ReactiveFormsModule
  ],
  templateUrl: './product-details.presenter.component.html',
  styleUrl: './product-details.presenter.component.css'
})
export class ProductDetailsPresenterComponent {

  formGroup:FormGroup= new FormGroup({
    title: new FormControl('', Validators.required),
    slug: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  onSubmit(){

  }
}
