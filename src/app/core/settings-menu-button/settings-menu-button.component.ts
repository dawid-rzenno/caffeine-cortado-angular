import { Component } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";

@Component({
  selector: "cortado-settings-menu-button",
  standalone: true,
  imports: [
    MatIconButton,
    MatMenuTrigger,
    FaIconComponent,
    MatMenu,
    MatMenuItem,
    RouterLink,
  ],
  templateUrl: "./settings-menu-button.component.html",
  styleUrl: "./settings-menu-button.component.scss",
})
export class SettingsMenuButtonComponent {}
