import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-puestos-empresa',
  templateUrl: './puestos-empresa.component.html',
  styleUrls: ['./puestos-empresa.component.css']
})
export class PuestosEmpresaComponent implements OnInit {

  empresaNombre;
  puestos;

  constructor(private firebase: FirebaseService) { }

  // Comprueba los puestos de la base de datos para guardar en un array cuyo
  // nombre coincide con el de la empresa seleccionada
  ngOnInit() {
    this.firebase.empresa$.subscribe(data => {
      this.empresaNombre = data.nombre;
    });
    this.firebase.getPuestos().subscribe(data => {
      this.puestos = [];
      for(let puesto of data){
        if(puesto.empresa == this.empresaNombre){
          this.puestos.push(puesto);
        };
      };
    });
  }

}
