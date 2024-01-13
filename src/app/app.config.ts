import {
  ApplicationConfig,
  ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideZonelessChangeDetection(),
  ],
};
