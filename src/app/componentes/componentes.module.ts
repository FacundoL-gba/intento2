import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {SlideMenuModule} from 'primeng/slidemenu';



@NgModule({
  declarations: [
    InicioComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    SlideMenuModule
  ]
})
export class ComponentesModule { }
