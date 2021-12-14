import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { CarrodetailComponent } from './carrodetail/carrodetail.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CarrosComponent } from './carros/carros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    HomeComponent,
    AboutComponent,
    CarrodetailComponent,
    LoginComponent,
    SignupComponent,
    CarrosComponent,
    ContactoComponent,
    FilterComponent,
    NavbarComponent,
    DestacadosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
