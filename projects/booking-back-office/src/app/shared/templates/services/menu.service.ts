import { Injectable } from '@angular/core';

import { MenuItem } from '../models/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private menuClass = 'open_menu_movil';

  constructor() { }

  private menuSections: MenuItem[] = [
    { label: 'Inicio', route: '/dashboard' },
    {
      label: 'Reservas',
      children: [
        { label: 'Alojamiento', route: '/home/warehouse/products' },
        { label: 'Vuelos', route: '/inventario/categorias' }
      ]
    },
    {
      label: 'Configuración',
      children: [
        { label: 'Perfiles', route: '/configuracion/perfil' },
        { label: 'Usuarios', route: '/configuracion/seguridad' },
        { label: 'Integraciones', route: '/configuracion/integraciones' }
      ]
    },
  ];

  getMenuSections(): MenuItem[] {
    return this.menuSections;
  }

  toggleMenu(): void {
    document.body.classList.toggle(this.menuClass);
  }
}
