import { Component, Input, OnInit } from '@angular/core';

import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { ColorDirective } from 'src/app/color.directive';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.sass'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail?: Cocktail;

  constructor() {}

  ngOnInit(): void {}
}
