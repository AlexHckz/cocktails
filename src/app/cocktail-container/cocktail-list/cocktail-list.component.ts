import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.sass'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails?: Cocktail[];
  @Output() private afficherC: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  public afficherCocktail(index: number) {
    this.afficherC.emit(index);
  }
}
