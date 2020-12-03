import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-alta-auto',
  templateUrl: './alta-auto.component.html',
  styleUrls: ['./alta-auto.component.css']
})
export class AltaAutoComponent implements OnInit {

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

  constructor(private fs: FirestoreService) { }

  ngOnInit(): void {
  }

  Publicar()
  {
    this.fs.Publicar(this.modeloFormControl.value, this.anoFormControl.value, this.precioFormControl.value, localStorage.getItem("email"));
  }
}
