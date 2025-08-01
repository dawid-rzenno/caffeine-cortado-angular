import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CreateIngredientPayload, Ingredient, IngredientDetails, UpdateIngredientPayload } from "./ingredient";
import { CrudService } from "../shared/crud/crud.service.abstract";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends CrudService<Ingredient, IngredientDetails, CreateIngredientPayload, UpdateIngredientPayload>{
	readonly apiUrl = `${environment.apiUrl}/ingredients`;

  constructor(http: HttpClient) {
		super(http);
	}
}
