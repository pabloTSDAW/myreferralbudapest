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
  empresaAEliminar;

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getEmpresas().subscribe(data => this.empresas = data);
    setTimeout(function(){
      $('#tablaEmpresas').DataTable({
      })
    }, 1000);
  }

  //Almacena los datos recogidos en el modal de la empresa para almacenarlos en la base de datos
  guardarEmpresa(){
    let empresa = {nombre: this.nombreEmpresa, sector: this.sectorEmpresa, descripcion: this.descripcionEmpresa}
    this.firebase.newEmpresa(empresa);
  }

  //Recibe como parámetro la empresa a eliminar
  obtenerEmpresa(empresa){
    this.empresaAEliminar = empresa;
  }

  //Elimina un registro de la base de datos
  eliminarDato(){
    this.firebase.removeEmpresa(this.empresaAEliminar);
  }

}
