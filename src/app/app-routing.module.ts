import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { PrimeraComponent } from './componentes/primera/primera.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '*', component:InicioComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'primera', component:PrimeraComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'verificar-correo', component:VerificarCorreoComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
