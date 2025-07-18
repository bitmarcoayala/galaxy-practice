import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IAlertaDTO } from '@shared/templates/models/alerta.dto';
import { MenuItem } from '@shared/templates/models/menu.model';
import { MenuService } from '@shared/templates/services/menu.service';
import { GLOBAL_EVENTS } from '../../../events/global.events';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  productSelectCount:number=0

  menuSections: MenuItem[] = [];

  //iAlerta?:IAlertaDTO

  private menuService= inject(MenuService);

  ngOnInit() {
    this.menuSections = this.menuService.getMenuSections();
  }

 @HostListener('window:'+GLOBAL_EVENTS.PRODUCT_SELECTED_EVENT, ['$event']) // Firma Event
  productSelectedEvent(event: any) {

  //console.log(event.detail.data)

   this.productSelectCount=event.detail.data
  }

}
