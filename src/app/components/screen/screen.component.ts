import { Component, OnInit } from '@angular/core';
import { ScreenService } from './services/screen.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  pokemon: any;
  constructor(private readonly screenService: ScreenService){}

  ngOnInit(): void {
    this.screenService.getPokemonInfo(6).subscribe(res => {
      this.pokemon = res;
    })
  }

}
