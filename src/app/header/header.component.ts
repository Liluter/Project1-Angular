import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sectionSwitch = new EventEmitter<string>()

  collapsed=true;
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(){
    this.sectionSwitch.emit('recipes')
  }
  onShopListClick(){
    this.sectionSwitch.emit('shoppingList')
  }
}
