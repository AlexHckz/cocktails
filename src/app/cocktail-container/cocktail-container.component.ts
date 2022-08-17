import { Component, OnDestroy, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.sass'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktail[] = [];
  public subscription: Subscription = new Subscription();
  public selectedCocktail: Cocktail | undefined;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((listeCocktail: Cocktail[]) => {
        this.cocktails = listeCocktail;
      })
    );

    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selection: Cocktail) => {
          this.selectedCocktail = selection;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public afficherCocktail(i: number) {
    this.cocktailService.selectCocktail(i);
  }
}
