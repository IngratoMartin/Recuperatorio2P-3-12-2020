import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  modeloFormControl = new FormControl('', [
    Validators.required
  ]);
  anoFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4)
  ]);
  precioFormControl = new FormControl('',[
    Validators.required
  ]);

  miUrl:string= this.router.url;
  urlArray = this.miUrl.split("/");
  id = this.urlArray[2];


  constructor(private router :Router, private fs: FirestoreService) { }

  ngOnInit(): void {
  }

  Modificar()
  {
    this.fs.ModificarAuto(this.id, this.modeloFormControl.value, this.anoFormControl.value, this.precioFormControl.value);
  }
}
