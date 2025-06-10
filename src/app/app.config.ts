import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import localEs from '@angular/common/locales/es-CO';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
};
