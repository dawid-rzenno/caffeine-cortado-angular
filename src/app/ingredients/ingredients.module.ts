import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ingredientsRoutes } from './ingredients.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(ingredientsRoutes),
  ]
})
export class IngredientsModule { }
