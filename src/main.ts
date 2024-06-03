import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Import other necessary providers

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Replace with your routes
    provideAnimationsAsync()
    // Other providers here
  ],
}).catch((err) => console.error(err));
