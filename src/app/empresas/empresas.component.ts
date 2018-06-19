import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: Array<any>;

  constructor(private firebase: FirebaseService) { }

    ngOnInit(){
      this.firebase.getEmpresas().subscribe(data => this.empresas = data);
    }
  }
