import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private readonly http: HttpClient) { }

  getPokemonInfo(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
