import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { Locale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  currentlocale = signal(inject(LOCALE_ID));
  nameLower = signal('jose montoya');
  nameUpper = signal('JOSE MONTOYA');
  fullName = signal('jOse mOntoya');

  customDate = signal(new Date());
  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });
  changeLocale(locale: Locale) {
    this.localeService.changeLocale(locale);
  }
}
