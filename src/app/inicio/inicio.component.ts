import { Component, OnInit, OnDestroy } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(){
    
  }

  ngOnInit() {
    $('.cabecera').toggle();
  }

  ngOnDestroy() {
    $('.cabecera').toggle();
  }

}
