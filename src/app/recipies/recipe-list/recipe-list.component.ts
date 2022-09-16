import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe('Pancakes', 'Pancakes with Maple Syrop and respberries. Ideal for breakfast :)', 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
