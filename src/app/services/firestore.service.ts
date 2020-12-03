import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fs:AngularFirestore) { }

  Publicar(modelo, ano, precio, usuario)
  {
    try {
      this.fs.collection('Autos').add({
        modelo: modelo,
        precio: precio,
        ano: ano,
        usuario: usuario
      });
      alert("Auto publicado con exito");
    } catch (error) {
      alert(error);
    }
  }

  TraerAutos()
  {
    return this.fs.collection('Autos').valueChanges();
  }
  TraerMisAutos()
  {
    const ref = this.fs.collection('Autos', ref => ref.where("usuario", "==", localStorage.getItem("email")));
    return ref.valueChanges({idField: 'customIdName'});
    //return this.fs.collection('Autos', ref => ref.where("usuario", "==", localStorage.getItem("email"))).valueChanges()
  }
  EliminarAuto(documento)
  {
    this.fs.collection('Autos').doc(documento).delete().then(data=>{
      alert("eliminado con exito")
    })
    .catch(error=>{
      alert(error);
    })
  }
  ModificarAuto(documento, modelo, ano, precio)
  {
    this.fs.collection('Autos').doc(documento).update(
      {
        modelo: modelo,
        ano: ano,
        precio: precio
      }
    ).then(data=>{
      alert("Modificado con exito");
    }).catch(error=>{
      alert(error)
    })
  }
}
