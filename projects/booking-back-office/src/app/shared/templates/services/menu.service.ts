import { Injectable } from '@angular/core';

import { MenuItem } from '../models/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private menuClass = 'open_menu_movil';

  constructor() { }

  private menuSections: MenuItem[] = [
    { label: 'Home', route: '/dashboard' },
    {
      label: 'Store',
      children: [
        { label: 'Orders', route: '/ventas/pedidos' },
        { label: 'Invoices', route: '/ventas/facturacion' },
        { label: 'Customers', route: '/ventas/clientes' },
        { label: 'Sales Reports', route: '/ventas/reportes' }
      ]
    },
    {
      label: 'Warehouse',
      children: [
        { label: 'Products', route: '/home/warehouse/products' },
        { label: 'Categories', route: '/inventario/categorias' },
        { label: 'Suppliers', route: '/inventario/proveedores' },
        { label: 'Stock Settings', route: '/inventario/stock' }
      ]
    },
    {
      label: 'Configuration',
      children: [
        { label: 'Profiles', route: '/configuracion/perfil' },
        { label: 'Users', route: '/configuracion/seguridad' },
        { label: 'Payment Methods', route: '/configuracion/metodos-pago' },
        { label: 'Integrations', route: '/configuracion/integraciones' }
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
