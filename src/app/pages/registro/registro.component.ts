import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FireauthService } from '../../services/fireauth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  claveFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
  ]);
  
  constructor(private auth: FireauthService) { }

  ngOnInit(): void {
  }

  Registro()
  {
    this.auth.registro(this.emailFormControl.value, this.claveFormControl.value,);
  }
}
