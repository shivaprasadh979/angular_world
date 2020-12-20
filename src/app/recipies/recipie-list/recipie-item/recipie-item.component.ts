import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../../recipies.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Output('selectedRecipie') selectedRecipie = new EventEmitter<void>();
  @Input('recipie') recipie: Recipie;
  constructor() {}
  ngOnInit(): void {}
  onSelectRecipie() {
    this.selectedRecipie.emit();
  }
}
