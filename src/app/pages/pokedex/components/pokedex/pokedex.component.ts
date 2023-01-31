import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
pokemons: IPokemon[] = [] ;
nextPage: string = '';
previousPage: string = '';

constructor(private readonly pokedexService: PokedexService){}

ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((res: any) => {
      this.pokemons = res.results;
      this.nextPage = res.next;
      console.log(this.pokemons);
    });
  }
}
