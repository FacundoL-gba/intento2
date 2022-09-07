import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Teoria1Component } from './componentes/teoria1/teoria1.component';
import { CreateTeoria1Component } from './componentes/create-teoria1/create-teoria1.component';

const routes: Routes = [
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '*', component:InicioComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'verificar-correo', component:VerificarCorreoComponent},
  {path: 'recuperar-password', component:RecuperarPasswordComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'teoria1', component:Teoria1Component},
  {path: 'create-teoria1', component:CreateTeoria1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
