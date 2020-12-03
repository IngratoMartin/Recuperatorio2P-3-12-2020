import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  public signedIn: Observable<any>;

  constructor( public fs: AngularFirestore, private router: Router, public auth: AngularFireAuth) {
    this.signedIn = new Observable((subscriber) => {
        this.auth.onAuthStateChanged(subscriber);
    });  
}
registro(email, clave)
  {
    this.auth.createUserWithEmailAndPassword(email, clave)
    .then(data => {
      alert("Usuario creado con exito");
    }
    )
    .catch(e => {
      alert(e);
    });

}
async login(email: string, password: string) {
  try {
      if (!email || !password) throw new Error('email o contraseña invalido');
      await this.auth.signInWithEmailAndPassword(email, password).then((user) => {
        localStorage.setItem('userUID', user.user.uid);
        localStorage.setItem('email', email);
        localStorage.setItem('logueado', "si");
      });
      alert("Usuario ingresado con exito");
      this.router.navigateByUrl("/");
      return true;
  } catch (error) {
      alert(error);
      return false;
  }
}
async signOut() {
  try {
      await this.auth.signOut();
      localStorage.removeItem('userUID');
      localStorage.removeItem('email');
      localStorage.removeItem('logueado');
      alert("Usuario desconectado con exito");
      this.router.navigateByUrl("/");
      return true;
  } catch (error) {
      console.log('Error al desconectarse', error);
      return false;
  }
}
}