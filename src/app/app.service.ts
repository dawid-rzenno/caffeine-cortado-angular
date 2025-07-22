import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AppService {

	readonly isSideNavOpen$: Subject<boolean> = new Subject();

  constructor(private matSnackBar: MatSnackBar) {}

	openSnackBar(message: string) {
		this.matSnackBar.open(message, 'Ok', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom',
			duration: 4000
		});
	}
}
