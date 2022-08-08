import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { PrimeraComponent } from './componentes/primera/primera.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: '*', component:InicioComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'primera', component:PrimeraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
