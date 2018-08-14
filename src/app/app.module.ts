import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { DataService } from './data.service';
import { FirebaseService } from './firebase.service';
import { HttpModule } from '@angular/http';

//Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

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
import { EmpresasComponent } from './empresas/empresas.component';
import { PuestosComponent } from './puestos/puestos.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardEmpresasComponent } from './dashboard-empresas/dashboard-empresas.component';
import { DashboardPuestosComponent } from './dashboard-puestos/dashboard-puestos.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PuestosEmpresaComponent } from './puestos-empresa/puestos-empresa.component';
import { OfertaComponent } from './oferta/oferta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC9vYx5oTASyjW7crrTApFR3LbCp3uAr6o",
  authDomain: "myreferralbudapest-empresas.firebaseapp.com",
  databaseURL: "https://myreferralbudapest-empresas.firebaseio.com",
  projectId: "myreferralbudapest-empresas",
  storageBucket: "myreferralbudapest-empresas.appspot.com",
  messagingSenderId: "488243195200"
};

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: InicioComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'puestos', component: PuestosComponent },
  { path: 'budapest', component: BudapestComponent },
  { path: 'budapest/info', component: BudapestInfoComponent },
  { path: 'budapest/ver', component: BudapestVerComponent },
  { path: 'budapest/transporte', component: BudapestTransporteComponent },
  { path: 'budapest/alojamiento', component: BudapestAlojamientoComponent },
  { path: 'myreferral', component: MyreferralComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'puestos-empresa', component: PuestosEmpresaComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: '**', component: NotFoundComponent }
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
    HeaderMainComponent,
    EmpresasComponent,
    PuestosComponent,
    AdminComponent,
    DashboardComponent,
    DashboardUserComponent,
    DashboardEmpresasComponent,
    DashboardPuestosComponent,
    EmpresaComponent,
    PuestosEmpresaComponent,
    OfertaComponent,
    NotFoundComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DataService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
