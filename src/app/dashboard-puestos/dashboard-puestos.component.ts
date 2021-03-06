import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard-puestos',
  templateUrl: './dashboard-puestos.component.html',
  styleUrls: ['./dashboard-puestos.component.css']
})
export class DashboardPuestosComponent implements OnInit {

  puestos;
  nombre: string;
  empresa: string;
  lugar: string;
  salario: string;
  fecha: string;
  estudios_minimos: string;
  experiencia_minima: string;
  descripcion: string;
  categoria: string;
  puestoAEliminar;

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getPuestos().subscribe(data => {
      this.puestos = data
    });
    setTimeout(function(){
      $('#tablaPuestos').DataTable()
    }, 1000);
  }

  //Almacena un puesto en la base de datos
  guardarPuesto(){
    this.fecha = new Date(Date.now()).toLocaleDateString(); //Fecha actual
    // this.fecha = Date(Date.now()).toLocaleString(); //Fecha y hora actuales
    let puesto = {id: Date.now(), nombre: this.nombre, empresa: this.empresa, descripcion: this.descripcion, lugar: this.lugar, salario: this.salario, fecha: this.fecha, estudios_minimos: this.estudios_minimos, experiencia_minima: this.experiencia_minima, categoria: this.categoria }
    this.firebase.newPuesto(puesto);
  }

  //Recibe como parámetro la empresa a eliminar
  obtenerPuesto(puesto){
    this.puestoAEliminar = puesto;
  }

  //Elimina un registro de la base de datos
  eliminarDato(){
    this.firebase.removePuesto(this.puestoAEliminar);
  }

}
