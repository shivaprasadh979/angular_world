import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  constructor() {}
  recipieSelected: Recipie;
  ngOnInit(): void {}
}
