import { Component, Input, OnInit } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { POKEMON_MOCK} from '../../shared/mocks/pokemon-response.mock'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
@Input() pokemon: any;
  
  constructor(private readonly screenService: ScreenService){}

  ngOnInit(): void {
    // this.pokemon = POKEMON_MOCK;
    this.screenService.getPokemonInfo(6).subscribe(res => {
      this.pokemon = res;
    })
  }

}
