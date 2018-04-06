import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BudapestComponent } from './budapest/budapest.component';
import { MyreferralComponent } from './myreferral/myreferral.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'home', component: InicioComponent},
  {path: 'budapest', component: BudapestComponent},
  {path: 'myreferral', component: MyreferralComponent},
  {path: 'contact', component: ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    BudapestComponent,
    MyreferralComponent
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
