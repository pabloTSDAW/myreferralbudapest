import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: Array<any>;

  constructor(private _dataService: DataService) { }

    ngOnInit(){
      this._dataService.getEmpresas().subscribe(data => this.empresas = data);
    }
  }
