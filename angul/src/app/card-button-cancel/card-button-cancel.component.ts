import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  template:'<div class="card-cancel-button">Cancelar</div>',
  styles: `
  .card-cancel-button {
    font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: red;
        cursor: pointer;
        padding: 10px;
}
  `
})
export class CardButtonCancelComponent {

}
