import { UpperCasePipe } from '@angular/common';
import { IProductDTO } from './../../models/dtos/product.dto';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card-presenter',
  imports: [UpperCasePipe],
  templateUrl: './product-card-presenter.component.html',
  styleUrl: './product-card-presenter.component.css'
})
export class ProductCardPresenterComponent {

  product=input<IProductDTO>()

  productSelect = output<IProductDTO|undefined>() ;

  image:string=this.product()?.images[0] || '/images/features/defaults/default'+getRandom()+'.png'

  selectToList(){
    this.productSelect.emit(this.product());
  }

}

function getRandom(): 1 | 3 {
    return Math.random() < 0.5 ? 1 : 3;
}
