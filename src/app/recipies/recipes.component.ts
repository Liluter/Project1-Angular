import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {

  }
  // selectedRecipe(event : Recipe){
  //   this.recipe = event;
  //   console.log('Recipes event data', this.recipe)
  // }

  onStart(event: Recipe){
    this.recipe = event;
    console.log('On start reciev date',this.recipe)
  }

}
