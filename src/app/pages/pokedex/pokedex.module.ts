import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from './services/pokedex.service';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexRoutingModule } from './pokedex.routing.module';



@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
  ],
  providers: [PokedexService]
})
export class PokedexModule { }
