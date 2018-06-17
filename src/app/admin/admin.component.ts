import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../firebase.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = {email: '', password: ''};

  constructor(public auth: FirebaseService) { }

  ngOnInit() {
    $('.cabecera').toggle();
    $('.footer').toggle();
  }

  ngOnDestroy() {
    $('.cabecera').toggle();
    $('.footer').toggle();
  }

  //Logueo de usuario
  login() {
    this.auth.loginUser(this.user.email, this.user.password).then((user) => {
      console.log('Usuario ' + this.user.email + ' logueado');
      this.presentLoading();
    }).catch(err => {
      console.log('Error de autenticación');
      alert('Error: <br>' + err.message);
      // let alert = this.alertCtrl.create({
      //   title: 'Error',
      //   subTitle: err.message,
      //   buttons: ['Aceptar']
    });

  }
}
