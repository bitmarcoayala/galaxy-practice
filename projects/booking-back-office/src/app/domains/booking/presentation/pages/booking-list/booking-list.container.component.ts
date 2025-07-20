import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booking-home',
  imports: [
    RouterOutlet
  ],
  templateUrl: './booking-home.component.html',
  styleUrl: './booking-home.component.css'
})
export class BookingHomeComponent {

   private readonly router=inject(Router);

   list(){
        this.router.navigate(["home/warehouse/bookings/list"])
    }
}