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

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getPuestos().subscribe(data => {
      this.puestos = data
    });
  }

  guardarPuesto(){
    let puesto = {nombre: this.nombre, empresa: this.empresa, descripcion: this.descripcion, lugar: this.lugar, salario: this.salario, fecha: this.fecha, estudios_minimos: this.estudios_minimos, experiencia_minima: this.experiencia_minima, categoria: this.categoria }
    this.firebase.newPuesto(puesto);
  }

}
