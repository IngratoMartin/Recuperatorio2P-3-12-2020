import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service'


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: FireauthService) { }

  ngOnInit(): void {
    this.auth.signOut();
  }

}
