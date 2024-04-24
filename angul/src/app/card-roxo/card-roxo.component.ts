import { Component } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {
  plano = {
    tipo: 'Super',
    preco: 'R$' + 250 + ',00/Mês'
  }
}
