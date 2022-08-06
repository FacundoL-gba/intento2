import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { CursosComponent } from './cursos/cursos.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    InicioComponent,
    CursosComponent
  ],
  exports: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    CardModule,
    ButtonModule,
    ImageModule
  ]
})
export class ComponentesModule { }
