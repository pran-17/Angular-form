import { Routes } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration';
import { VenueBookingComponent } from './venue-booking/venue-booking';

export const routes: Routes = [
  { path: '', redirectTo: 'event-registration', pathMatch: 'full' },
  { path: 'event-registration', component: EventRegistrationComponent },
  { path: 'venue-booking', component: VenueBookingComponent }
];
