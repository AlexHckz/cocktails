import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { ColorDirective } from './color.directive';
import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
    CocktailContainerComponent,
    ColorDirective,
    SelectedDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
