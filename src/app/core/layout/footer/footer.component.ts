import { Component } from "@angular/core";
import { GITHUB_URL, LINKEDIN_URL } from "../../../shared/external_urls";

@Component({
  selector: "cortado-footer",
  templateUrl: "./footer.component.html",
  standalone: true,
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  protected readonly GITHUB_URL = GITHUB_URL;
  protected readonly LINKEDIN_URL = LINKEDIN_URL;
}
