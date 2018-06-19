import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = { email: '', password: '' };

  constructor(public auth: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.auth.Session.subscribe(session => {
      if (session) this.router.navigate(['/dashboard']);
    });
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
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err.message);
      if (err.message == 'The email address is badly formatted.') {
        err.message = 'El email no está correctamente escrito';
        $('#modalError .modal-body').text(err.message);
        $('#modalError').modal();
      }
      else if (err.message == 'The password is invalid or the user does not have a password.') {
        err.message = 'La contraseña introducida no es válida o el usuario no está registrado.';
        $('#modalError .modal-body').text(err.message);
        $('#modalError').modal();
      }
      else if (err.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        err.message = 'No hay ningún usuario registrado con ese email.';
        $('#modalError .modal-body').text(err.message);
        $('#modalError').modal();
      }
    });

  }
}
