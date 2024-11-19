import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../libraries/font-awesome-icon-library.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { map, Observable } from "rxjs";
import { UserService } from "../user/user.service";
import { AsyncPipe } from "@angular/common";
import { User } from "../user/user";

@Component({
  selector: "cortado-home",
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeIconLibraryModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    AsyncPipe,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  protected username$: Observable<string> = this.userService.user$.pipe(
    map((user: User) => user.name),
  );

  constructor(private userService: UserService) {}
}
