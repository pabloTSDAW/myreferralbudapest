import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard-empresas',
  templateUrl: './dashboard-empresas.component.html',
  styleUrls: ['./dashboard-empresas.component.css']
})
export class DashboardEmpresasComponent implements OnInit {

  empresas;
  nombreEmpresa: string;
  sectorEmpresa: string;
  descripcionEmpresa: string;

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getEmpresas().subscribe(data => this.empresas = data);
    setTimeout(function(){
      $('#tablaEmpresas').DataTable()
    }, 1000);
  }

  guardarEmpresa(){
    let empresa = {nombre: this.nombreEmpresa, sector: this.sectorEmpresa, descripcion: this.descripcionEmpresa}
    this.firebase.newEmpresa(empresa);
  }

}
