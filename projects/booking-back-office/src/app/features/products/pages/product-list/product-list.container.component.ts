import { IProductDTO } from './../../models/dtos/product.dto';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ProductListPresenterComponent } from '../../components/product-list.presenter/product-list.presenter.component';
import { Router } from '@angular/router';
import { ProductCardPresenterComponent } from '../../components/product-card.presenter/product-card-presenter.component';
import { ProductListSelectedPresenterComponent } from '../../components/product-list-selected-presenter/product-list-selected-presenter.component';
import { GLOBAL_EVENTS } from '../../../../shared/events/global.events';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list-container',
  imports: [
    ProductListPresenterComponent,
    ProductCardPresenterComponent,
    ProductListSelectedPresenterComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
   ],
  templateUrl: './product-list.container.component.html',
  styleUrl: './product-list.container.component.css'
})
export class ProductListContainerComponent {

    private readonly router=inject(Router);
    private readonly toastr=inject(ToastrService);

    swList:boolean=true;

    productsListSelected:IProductDTO[]=[]


    products:IProductDTO[]=[
      {
        "id": 65,
        "title": "Majestic Mountain Graphic T-Shirt",
        "price": 44,
        "category": "Clothes",
        "images":[
           "https://i.imgur.com/QkIa5tT.jpeg"
        ]
      },
      {
        "id": 67,
        "title": "Classic Black Hooded Sweatshirt",
        "price": 79,
        "category": "Clothes",
        "images":[
           "https://i.imgur.com/R2PN9Wq.jpeg",
        ]
      },
      {
        "id": 124,
        "title": "Modern Black Hooded Sweatshirt",
        "price": 79,
        "category": "Clothes",
        "images":[
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        ]

      }
    ];

  productDeletedId(productDeletedId:number){
      this.productsListSelected=this.productsListSelected.filter(p=> p.id!=productDeletedId);
       this.toastr.success('Se eliminó item', 'Éxito');
  }

  productSelect(iProductDTO?: IProductDTO) {
      console.log('Message received:', iProductDTO);
      if(iProductDTO){

          const product= this.productsListSelected.filter(p=> p.id==iProductDTO.id);

          if(product.length>0){
            console.log('El producto '+ iProductDTO.title + ' ya está seleccionado')
             this.toastr.warning('El producto '+ iProductDTO.title + ' ya está seleccionado')
            return;
          }

          this.productsListSelected.push(iProductDTO)

          const data=this.productsListSelected.length
          //console.log(data)

          window.dispatchEvent(
          new CustomEvent(GLOBAL_EVENTS.PRODUCT_SELECTED_EVENT, {
            detail: {
              data: data
            },
          }))

      }
    }
    clearList(){
      this.productsListSelected=[]
    }

    showList(sw:boolean){
        this.swList=sw
    }


    search(){
        this.router.navigate(["home/warehouse/products/list"])
    }

    new(){
        this.router.navigate(["home/warehouse/products/details"])
    }
}
