import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './venue-booking.html',
  styleUrls: ['./venue-booking.css']
})
export class VenueBookingComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Venue Booking Data:", form.value);
      alert("Venue booked successfully!");
      this.router.navigate(['/']); // navigate back to home/dashboard
    }
  }
}
