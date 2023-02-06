import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pad-buttons',
  templateUrl: './pad-buttons.component.html',
  styleUrls: ['./pad-buttons.component.scss']
})
export class PadButtonsComponent {
@Input() pokemonName: any;
  constructor(){
  }
}
