import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './event-registration.html',
  styleUrls: ['./event-registration.css']
})
export class EventRegistrationComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Event Registration Data:", form.value);
      alert("Event registered successfully!");
      // ✅ After successful registration, go to venue booking
      this.router.navigate(['/venue-booking']);
    }
  }
}
