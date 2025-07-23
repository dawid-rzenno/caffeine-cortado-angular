import { Component, DestroyRef, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AuthService } from "../../../auth/auth.service";

@Component({
	selector: 'app-change-password-dialog',
	imports: [
		MatDialogModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatIconModule,
		MatFormFieldModule,
		MatButtonModule,
		MatCheckboxModule,
		MatInputModule
	],
	templateUrl: './change-password-dialog.component.html',
	styleUrl: './change-password-dialog.component.scss'
})
export class ChangePasswordDialogComponent {
	readonly dialogRef = inject(MatDialogRef<ChangePasswordDialogComponent>);
	readonly data = inject<{ id: number }>(MAT_DIALOG_DATA);
	readonly authService: AuthService = inject(AuthService);

	readonly displayedColumns = ['name', 'actions'];

	readonly passwordControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required });

	readonly form: FormGroup = new FormGroup({
		password: this.passwordControl,
	});

	constructor(private destroyRef?: DestroyRef) {
	}

	onSubmit() {
		this.authService
			.changePassword$({
				id: this.data.id,
				password: this.passwordControl.value,
			})
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => this.dialogRef.close(true));
	}
}
