import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StatusComponent } from "../../status/status.component";

@Component({
  selector: "cortado-main",
  standalone: true,
  imports: [RouterModule, StatusComponent],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {}
