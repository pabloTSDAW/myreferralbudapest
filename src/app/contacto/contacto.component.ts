import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  users: Array<any>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getUsers().subscribe(res => this.users = res);
    console.log(this.users);
  }

}
