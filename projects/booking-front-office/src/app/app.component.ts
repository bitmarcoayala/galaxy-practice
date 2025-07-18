import { Component, OnInit } from '@angular/core';

interface SearchData {
  destination: string;
  checkin: string;
  checkout: string;
  guests: string;
}

interface Destination {
  id: number;
  name: string;
  properties: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booking-clone';

  searchData: SearchData = {
    destination: '',
    checkin: '',
    checkout: '',
    guests: '2'
  };

  popularDestinations: Destination[] = [
    {
      id: 1,
      name: 'París',
      properties: '2,847 propiedades',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Barcelona',
      properties: '1,953 propiedades',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Madrid',
      properties: '1,721 propiedades',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Roma',
      properties: '2,156 propiedades',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Londres',
      properties: '3,421 propiedades',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Ámsterdam',
      properties: '1,287 propiedades',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
    this.setDefaultDates();
  }

  private setDefaultDates(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    this.searchData.checkin = tomorrow.toISOString().split('T')[0];
    this.searchData.checkout = nextWeek.toISOString().split('T')[0];
  }

  search(): void {
    if (!this.validateSearchData()) {
      return;
    }

    console.log('Searching with data:', this.searchData);
    
    // Simulate search functionality
    this.performSearch();
  }

  private validateSearchData(): boolean {
    if (!this.searchData.destination.trim()) {
      alert('Por favor, ingresa un destino');
      return false;
    }

    if (!this.searchData.checkin) {
      alert('Por favor, selecciona una fecha de entrada');
      return false;
    }

    if (!this.searchData.checkout) {
      alert('Por favor, selecciona una fecha de salida');
      return false;
    }

    const checkinDate = new Date(this.searchData.checkin);
    const checkoutDate = new Date(this.searchData.checkout);

    if (checkinDate >= checkoutDate) {
      alert('La fecha de salida debe ser posterior a la fecha de entrada');
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkinDate < today) {
      alert('La fecha de entrada no puede ser anterior a hoy');
      return false;
    }

    return true;
  }

  private performSearch(): void {
    // Here you would typically make an API call to search for accommodations
    // For now, we'll just show an alert with the search parameters
    const message = `Buscando alojamientos en ${this.searchData.destination} 
                    desde ${this.formatDate(this.searchData.checkin)} 
                    hasta ${this.formatDate(this.searchData.checkout)} 
                    para ${this.searchData.guests} huéspedes`;
    
    alert(message);
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  onDestinationSelect(destination: Destination): void {
    this.searchData.destination = destination.name;
    // Scroll to search form
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
      searchForm.scrollIntoView({ behavior: 'smooth' });
    }
  }
}