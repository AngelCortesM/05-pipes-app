import { Injectable, signal } from '@angular/core';
export type Locale = 'en' | 'es' | 'fr';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<Locale>('es');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locale) ?? 'es');
  }
  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
