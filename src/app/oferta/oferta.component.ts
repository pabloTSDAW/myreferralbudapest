import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  oferta: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.oferta$.subscribe(data => {
      this.oferta = data;
    });
  }

  inscribirse() {
    $('#inscripcion').close();
  }

}
