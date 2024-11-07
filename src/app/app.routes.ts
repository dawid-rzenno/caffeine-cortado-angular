import { Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { createTitle } from "./shared/functions/create-title.funtion";
import { SignInComponent } from "./core/auth/sign-in/sign-in.component";
import { SignOutComponent } from "./core/auth/sign-out/sign-out.component";
import { SignUpComponent } from "./core/auth/sign-up/sign-up.component";

export const routes: Routes = [
  {
    path: "diet",
    loadChildren: () => import("./diet/diet.module").then((m) => m.DietModule),
  },
  {
    path: "meal",
    loadChildren: () => import("./meal/meal.module").then((m) => m.MealModule),
  },
  {
    path: "ingredient",
    loadChildren: () =>
      import("./ingredient/ingredient.module").then((m) => m.IngredientModule),
  },
  {
    path: "beverage",
    loadChildren: () =>
      import("./beverage/beverage.module").then((m) => m.BeverageModule),
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (m) => m.ShoppingListModule,
      ),
  },
  {
    path: "workout",
    loadChildren: () =>
      import("./workout/workout.module").then((m) => m.WorkoutModule),
  },
  {
    path: "exercise",
    loadChildren: () =>
      import("./exercise/exercise.module").then((m) => m.ExerciseModule),
  },
  {
    path: "auth",
    children: [
      {
        path: "sign-in",
        component: SignInComponent,
      },
      {
        path: "sign-out",
        component: SignOutComponent,
      },
      {
        path: "sign-up",
        component: SignUpComponent,
      },
    ],
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
    title: createTitle("Home"),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: `/home`,
  },
  {
    path: "page-not-found",
    component: NotFoundComponent,
    title: createTitle("404 Page not found"),
  },
  {
    path: "**",
    redirectTo: "page-not-found",
  },
];
