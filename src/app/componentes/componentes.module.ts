import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { CursosComponent } from './cursos/cursos.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { PrimeraComponent } from './primera/primera.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    CursosComponent,
    PrimeraComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    DashboardComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    CardModule,
    ButtonModule,
    ImageModule,
    ReactiveFormsModule
  ]
})
export class ComponentesModule { }
