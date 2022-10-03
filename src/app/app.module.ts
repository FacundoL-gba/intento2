import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { AngularFireModule } from '@angular/fire/compat'
import { ToastrModule } from 'ngx-toastr';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './shared/menu/menu.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import { CardModule, } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinerComponent } from './shared/spiner/spiner.component';
import { environment } from 'src/environments/environment';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SlideMenuModule,
    SplitButtonModule,
    CardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
