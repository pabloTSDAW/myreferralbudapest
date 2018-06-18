import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
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
      console.log('Hemos cerrado la sesión');
    })
  }

  //Obtiene las empresas de la base de datos
  getEmpresas() {
    return this.afDB.list('/empresas').valueChanges();
  }

  //Almacena una nueva empresa en la base de datos
  newEmpresa(empresa) {
    return this.afDB.database.ref('/empresas').child(empresa.nombre).set(empresa);
  }

  //Obtiene los puestos en la base de datos
  getPuestos() {
    return this.afDB.list('/puestos').valueChanges();
  }

  //Almacena un nuevo puesto en la base de datos
  newPuesto(puesto) {
    puesto.id = Date.now();
    return this.afDB.database.ref('/puestos').child(puesto.id).set(puesto);
  }

}
