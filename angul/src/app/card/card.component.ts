import { Component } from '@angular/core';

interface Plano {
  infos: Infos;
}

interface Infos {
  tipo: string,
  preco: number,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 //@ts-ignore
  plano: Plano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    }
  }
}