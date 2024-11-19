import { Routes } from "@angular/router";

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
    path: "user",
    children: [
      {
        path: "settings",
        loadComponent: () =>
          import("./core/user/user-settings.component").then(
            (m) => m.UserSettingsComponent,
          ),
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "sign-in",
        loadComponent: () =>
          import("./core/auth/sign-in/sign-in.component").then(
            (m) => m.SignInComponent,
          ),
      },
      {
        path: "sign-out",
        loadComponent: () =>
          import("./core/auth/sign-out/sign-out.component").then(
            (m) => m.SignOutComponent,
          ),
      },
      {
        path: "sign-up",
        loadComponent: () =>
          import("./core/auth/sign-up/sign-up.component").then(
            (m) => m.SignUpComponent,
          ),
      },
    ],
  },
  {
    path: "home",
    loadComponent: () =>
      import("./core/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: `/home`,
  },
  {
    path: "page-not-found",
    loadComponent: () =>
      import("./core/not-found/not-found.component").then(
        (m) => m.NotFoundComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "page-not-found",
  },
];
