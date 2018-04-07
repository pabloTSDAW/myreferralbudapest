import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BudapestComponent } from './budapest/budapest.component';
import { MyreferralComponent } from './myreferral/myreferral.component';
import { BudapestSliderComponent } from './budapest-slider/budapest-slider.component';
import { BudapestInfoComponent } from './budapest-info/budapest-info.component';
import { BudapestVerComponent } from './budapest-ver/budapest-ver.component';
import { BudapestTransporteComponent } from './budapest-transporte/budapest-transporte.component';
import { BudapestAlojamientoComponent } from './budapest-alojamiento/budapest-alojamiento.component';
import { HeaderMainComponent } from './header-main/header-main.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: InicioComponent },
  { path: 'budapest', component: BudapestComponent },
  { path: 'budapest/info', component: BudapestInfoComponent },
  { path: 'budapest/ver', component: BudapestVerComponent },
  { path: 'budapest/transporte', component: BudapestTransporteComponent },
  { path: 'budapest/alojamiento', component: BudapestAlojamientoComponent },
  { path: 'myreferral', component: MyreferralComponent },
  { path: 'contact', component: ContactoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    BudapestComponent,
    MyreferralComponent,
    BudapestSliderComponent,
    BudapestInfoComponent,
    BudapestVerComponent,
    BudapestTransporteComponent,
    BudapestAlojamientoComponent,
    HeaderMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
