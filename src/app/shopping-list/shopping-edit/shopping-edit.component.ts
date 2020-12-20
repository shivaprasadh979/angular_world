import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output('ingradientAdded') ingradientAdded = new EventEmitter<Ingrediant>();
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    const igName = this.nameInputRef.nativeElement.value;
    const igAmount = this.amountInputRef.nativeElement.value;
    console.log(igName, ' ', igAmount);
    const newIngradient = new Ingrediant(igName, igAmount);
    console.log(newIngradient);
    this.ingradientAdded.emit(newIngradient);
  }
}
