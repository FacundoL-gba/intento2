import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { CursosComponent } from './cursos/cursos.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Teoria1Component } from './teoria1/teoria1.component';
import { Teoria2Component } from './teoria2/teoria2.component';




@NgModule({
  declarations: [
    InicioComponent,
    CursosComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    DashboardComponent,
    SpinnerComponent,
    Teoria1Component,
    Teoria2Component
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    CardModule,
    ButtonModule,
    ImageModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SplitButtonModule,
    ToastModule
  ]
})
export class ComponentesModule { }
