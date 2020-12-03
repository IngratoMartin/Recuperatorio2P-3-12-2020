import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-autos',
  templateUrl: './mis-autos.component.html',
  styleUrls: ['./mis-autos.component.css']
})
export class MisAutosComponent implements OnInit {

  autos;

  constructor(private fs: FirestoreService, private router :Router) { }

  ngOnInit(): void {
    this.fs.TraerMisAutos().subscribe(data => {
      this.autos=data;
    })
  }

  Modificar(customIdName)
  {
    this.router.navigateByUrl("/modificar/"+customIdName);
  }

  Eliminar(customIdName)
  {
    this.fs.EliminarAuto(customIdName);
  }
}
