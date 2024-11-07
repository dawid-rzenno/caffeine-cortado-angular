import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: "cortado-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.scss"],
  standalone: true,
  imports: [MatProgressSpinner],
})
export class SignOutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signOut().subscribe();
  }
}
