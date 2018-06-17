import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth) {
  }

  //Registro de usuario
  registerUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      // El usuario se ha creado correctamente
    }).catch(err => Promise.reject(err))
  }

  //Login de usuario
  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  //Devuelve la sesión
  get Session() {
    return this.afAuth.authState;
  }

  //Cierre de sesión del usuario
  logout() {
    this.afAuth.auth.signOut().then(() => {
      //hemos salido
    })
  }

}
