import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero={
    id: 1,
    name: 'Thor',
    edad: 60,
    tipo: 'Fuerza',
    identidad:'Secreta',
    universo: 'Marvel'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
