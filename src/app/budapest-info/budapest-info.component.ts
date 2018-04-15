import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-budapest-info',
  templateUrl: './budapest-info.component.html',
  styleUrls: ['./budapest-info.component.css']
})
export class BudapestInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
  }

}
