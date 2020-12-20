import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit {
  @Output('onRecipieWasSelected')
  onRecipieWasSelected = new EventEmitter<Recipie>();
  recipieSelected: Recipie;
  recipies: Recipie[] = [
    new Recipie(
      'Burger',
      'Hey you can eat me easily',
      'https://image.shutterstock.com/image-illustration/firebase-dynamic-links-transfer-web-600w-1063089992.jpg'
    ),
    new Recipie(
      'Burger',
      'Hey you can eat me easily',
      'https://image.shutterstock.com/image-illustration/firebase-dynamic-links-transfer-web-600w-1063089992.jpg'
    ),
    new Recipie(
      'Burger',
      'Hey you can eat me easily',
      'https://image.shutterstock.com/image-illustration/firebase-dynamic-links-transfer-web-600w-1063089992.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipieSelected(recipieSelected: Recipie) {
    this.onRecipieWasSelected.emit(recipieSelected);
  }
}
