import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';
const client1 = {
  name: 'Angel',
  gender: 'male',
  age: 26,
  address: '123 Main St, City A',
};
const client2 = {
  name: 'Marbelle',
  gender: 'female',
  age: 25,
  address: '456 Elm St, City B',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export default class UncommonPageComponent {
  //i18nSelect
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
  //i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  });
  clients = signal([
    'Marbelle',
    'Angel',
    'Juan',
    'Pedro',
    'Luis',
    'Carlos',
    'Andres',
    'Jorge',
    'Jose',
    'Miguel',
    'David',
    'Daniel',
    'Santiago',
    'Sebastian',
    'Alejandro',
    'Diego',
    'Gabriel',
    'Fernando',
    'Eduardo',
    'Arturo',
  ]);
  deleteClient() {
    this.clients.update((clients) => clients.slice(1));
  }
}
