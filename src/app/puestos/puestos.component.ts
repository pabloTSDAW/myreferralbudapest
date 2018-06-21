import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {

  puestos;
  puestosGeneral;
  cont: number = 4;
  comprobar: boolean = false;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.empresa$.subscribe(data => {
      this.empresaNombre = data.nombre;
    });

    this.peticionOfertas(this.cont);

    //SCROLL INFINITO
      var win = $(window);

      // Cada vez que el usuario hace scroll
      var self = this;
      win.scroll(function() {
        if (($(document).height() - win.height() <= (win.scrollTop()) + 20) && ($(document).height() - win.height() >= (win.scrollTop()) - 20)) {
          self.comprobar = true;
          if (self.comprobar == true) {
            self.cont++;
            self.peticionOfertas(self.cont);
            self.comprobar = false;
          }
        }
      });
  }

  //Recoge todas las ofertas de la base de datos
  peticionOfertas(cont) {
  $('#fountainG').show();
    this.firebase.getPuestos().subscribe(data => {
      this.empresa = data;
      this.puestosGeneral = [];
      for (let puesto of this.empresa) {
        this.puestosGeneral.push(puesto);
      };
      this.puestosGeneral.reverse();
      this.puestos = this.puestosGeneral.splice(0, cont);
      $('#fountainG').hide();
    });
  }

  //Elige una oferta y la pasa como parámetro a la vista individual
  seleccionarOferta(elem) {
    this.firebase.setOferta(elem);
  }

}
