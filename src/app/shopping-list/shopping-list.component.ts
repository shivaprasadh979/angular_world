import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingrediants :Ingrediant[] = [new Ingrediant('Banana',5),new Ingrediant('Cat',100)];
  constructor() { }

  ngOnInit(): void {
  }

}
