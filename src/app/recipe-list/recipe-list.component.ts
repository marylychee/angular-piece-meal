import {
  Component,
  OnInit,
  Input,
  Output
} from '@angular/core';

import { Recipe } from './../_models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent {

    @Input() recipeList: Recipe[];
}
