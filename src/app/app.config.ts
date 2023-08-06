import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firebaseProviders } from './firebase.config';
import { routes } from './app-routing';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), firebaseProviders],
};
