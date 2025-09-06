import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { UsersRoutes } from "./users.routes";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { UsersService } from "./users.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(UsersRoutes)
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: UsersService }
	]
})
export class UsersModule { }
