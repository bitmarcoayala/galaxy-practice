import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { IProductDTO } from '../../models/dtos/product.dto';

@Component({
  selector: 'app-product-list-presenter',
  imports: [
    CommonModule
  ],
  templateUrl: './product-list.presenter.component.html',
  styleUrl: './product-list.presenter.component.css'
})
export class ProductListPresenterComponent implements OnInit {

  //constructor( private router: Router, private toastr: ToastrService) { }
  products=input<IProductDTO[]>();

  ngOnInit(): void {
    console.log("....ProductListPresenterComponent ")
  }
  nuevoRegistro(){
    //this.router.navigate(['/page/seguridad/usuarios/registro'])
  }
  delete(item:number){

  }

  /*
  deleteItem(item:string){
    Swal.fire({
      title: 'Confirmar',
      html: `<p>¿Está seguro de eliminar el registro <b>${item}</b> No se podrá recuperar el registro, luego de ser eliminado.?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0B5ED7',
      cancelButtonColor: '#8d949a',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      allowOutsideClick: false
    }).then((result) => {
      this.toastr.success('Se elimino item', 'Éxito');
    })*/
  }
