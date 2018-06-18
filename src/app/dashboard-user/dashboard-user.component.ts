import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  user;
  password: string;
  password2: string;
  error: string;

  constructor(public firebase: FirebaseService) { }

  ngOnInit() {
    this.user = this.firebase.getUser();
  }

  //Actualiza la contraseña del usuario actual
  changePassword(){
    if(this.password == this.password2){
      if(this.password.length < 6) {
        this.error = "La contraseña debe contener al menos 6 caracteres";
      }
      else {
        this.firebase.changePassword(this.password2);
        $('#modalPassword').modal('hide');
        $('#newPassword').modal('show');
      }
    }
    else {
      this.error = "Las contraseñas no coinciden"
    }
  }

}
