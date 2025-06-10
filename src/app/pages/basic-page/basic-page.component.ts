import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export default class BasicPageComponent {
  nameLower = signal('jose montoya');
  nameUpper = signal('JOSE MONTOYA');
  fullName = signal('jOse mOntoya');

  customDate = signal(new Date());
}
