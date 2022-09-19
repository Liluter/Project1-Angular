import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-1-ang';

  showRecipe: boolean = true;
  showShoppingList: boolean = false;

  switchSection(event){
    if (event == "recipes") {
      this.showRecipe = true;
      this.showShoppingList = false;
    } else if (event == 'shoppingList'){
      this.showRecipe = false;
      this.showShoppingList = true;
    }
  }
}
