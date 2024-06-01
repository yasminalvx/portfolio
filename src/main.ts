import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
// Import other necessary providers

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Replace with your routes
    // Other providers here
  ],
}).catch((err) => console.error(err));
