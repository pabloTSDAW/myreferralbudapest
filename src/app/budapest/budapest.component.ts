import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-budapest',
  templateUrl: './budapest.component.html',
  styleUrls: ['./budapest.component.css']
})
export class BudapestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.cabecera').addClass('header2');
  }

}
