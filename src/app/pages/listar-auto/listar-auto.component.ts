import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-listar-auto',
  templateUrl: './listar-auto.component.html',
  styleUrls: ['./listar-auto.component.css']
})
export class ListarAutoComponent implements OnInit {

  autos;

  constructor(private fs:FirestoreService) { }

  ngOnInit(): void {
    this.fs.TraerAutos().subscribe(data => {
      this.autos=data;
    })
  }

}
