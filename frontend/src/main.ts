import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Handle GitHub Pages redirect for client-side routing
if (window.location.search.includes('?/')) {
  const path = window.location.search.split('?/')[1].split('&')[0].replace(/~and~/g, '&');
  const hash = window.location.hash;
  window.history.replaceState({}, '', path + hash);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
