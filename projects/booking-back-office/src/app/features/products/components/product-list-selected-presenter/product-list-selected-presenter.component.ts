import { Component, input, output } from '@angular/core';
import { IProductDTO } from '../../models/dtos/product.dto';
import Swal from 'sweetalert2';
import { PRODUCT_MESSAGE } from '../../constants/messages.constants';
import { strFormat } from '../../../../shared/functions/string.format';

@Component({
  selector: 'app-product-list-selected-presenter',
  imports: [],
  templateUrl: './product-list-selected-presenter.component.html',
  styleUrl: './product-list-selected-presenter.component.css'
})
export class ProductListSelectedPresenterComponent {

  productsListSelected=input<IProductDTO[]>();
  
  productDeletedId=output<number>();

  //msg=`<p>¿Está seguro de eliminar el item <b>${title}</b> . No se podrá recuperarlo?`;


  deleteItem(product:IProductDTO){

     Swal.fire({
      title: 'Confirmar',
      html: strFormat(PRODUCT_MESSAGE.MSG_DELETE_PRODUCT,product.title),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0B5ED7',
      cancelButtonColor: '#8d949a',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      allowOutsideClick: false
    }).then((result) => {
        if(result.isConfirmed){
          console.log(result.isConfirmed)
          this.productDeletedId.emit(product.id)
        }
    })


  }

}

