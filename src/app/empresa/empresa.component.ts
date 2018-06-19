import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresa: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.empresa$.subscribe(data => {
      this.empresa = data;
    });
  }
}
