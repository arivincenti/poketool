import { Component, OnInit } from '@angular/core';
import { ScreenService } from './components/screen/services/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poketool';
  pokemon: any;
  constructor(private readonly screenService: ScreenService){}

  ngOnInit(): void {
    this.screenService.getPokemonInfo(6).subscribe(res => {
      this.pokemon = res;
    })
  }
}
