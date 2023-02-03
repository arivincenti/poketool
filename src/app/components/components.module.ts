import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { HeaderLightsComponent } from './header-lights/header-lights.component';
import { PadButtonsComponent } from './pad-buttons/pad-buttons.component';
import { ScreenService } from './screen/services/screen.service';



@NgModule({
  declarations: [
    ScreenComponent,
    HeaderLightsComponent,
    PadButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ScreenService],
  exports: [
    PadButtonsComponent,
    ScreenComponent,
    HeaderLightsComponent
  ]
})
export class ComponentsModule { }
