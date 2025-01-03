import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'contact', component: ContactComponent },
    ]),
  ],
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
