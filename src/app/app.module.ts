import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieListComponent,
    RecipieItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
