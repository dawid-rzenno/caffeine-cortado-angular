import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackBar: MatSnackBar) { }

	open(message: string): void {
		this.matSnackBar.open(message, 'Ok', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom',
			duration: 4000
		});
	}
}
