import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logueado = false;
  pagina = 'inicio';

  constructor(public auth: FirebaseService, private router: Router) {

  }

  //Desactiva la cabecera por defecto
  ngOnInit() {
    $('.cabecera').toggle();
    $('.footer').toggle();
    this.auth.Session.subscribe(session => {
      if (session) this.logueado = true;
      else this.router.navigate(['/admin']);
    });
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  }

  //Activa la caebecera por defecto
  ngOnDestroy() {
    $('.cabecera').toggle();
    $('.footer').toggle();
  }

  //Termina la sesión actual
  cerrarSesion() {
    this.auth.logout();
  }

  changePage(elem){
    this.pagina = elem;
  }

}
