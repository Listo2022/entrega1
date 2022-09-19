import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  comida1="Descripción de su plato"
  comida2="Descripción de su plato"
  comida3="Descripción de su plato"
  comida4="Descripción de su plato"
}
