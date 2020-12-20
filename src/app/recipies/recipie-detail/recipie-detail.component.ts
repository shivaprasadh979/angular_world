import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css'],
})
export class RecipieDetailComponent implements OnInit {
  @Input('recipie') recipie: Recipie;
  constructor() {}

  ngOnInit(): void {}
}
