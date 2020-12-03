import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FireauthService } from '../../services/fireauth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  Ingresar()
  {
    this.auth.login(this.emailFormControl.value, this.claveFormControl.value);
  }
}
