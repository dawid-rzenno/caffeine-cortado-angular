import { Component } from "@angular/core";
import { StatusService } from "./status.service";
import { Observable } from "rxjs";
import { InstantiatedStatus } from "./common/instantiated-status";
import { AsyncPipe, NgClass } from "@angular/common";
import { FontAwesomeIconLibraryModule } from "../libraries/font-awesome-icon-library.module";

@Component({
  selector: "cortado-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
  standalone: true,
  imports: [NgClass, AsyncPipe, FontAwesomeIconLibraryModule],
})
export class StatusComponent {
  readonly statuses$: Observable<InstantiatedStatus[]> = this.service.statuses$;

  constructor(private service: StatusService) {}

  close(statusId: number): void {
    this.service.closeStatusWithId(statusId);
  }
}
