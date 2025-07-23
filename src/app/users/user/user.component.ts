import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { of, switchMap } from "rxjs";
import { UsersService } from "../users.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { User, UserRole } from "../user";
import { MatDialog } from "@angular/material/dialog";
import { ChangePasswordDialogComponent } from "./change-password-dialog/change-password-dialog.component";
import { AuthService } from "../../auth/auth.service";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSelectModule } from "@angular/material/select";
import { UserRolesService } from "../../user-roles/user-roles.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SelectOption } from "../../utils/select-option";

export type UserFormControls = {
	username: FormControl<string>;
	roleId: FormControl<number | undefined>;
	password?: FormControl<string>;
}

@Component({
	selector: 'app-user',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		MatBadgeModule,
		MatSelectModule
	],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
	id?: number;

	userRoleOptions: SelectOption[] = [];

	readonly usernameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly passwordControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly roleIdControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly form: FormGroup<UserFormControls> = new FormGroup<UserFormControls>({
		username: this.usernameControl,
		roleId: this.roleIdControl,
	});

	readonly dialog = inject(MatDialog);

	constructor(
		private route: ActivatedRoute,
		private usersService: UsersService,
		private userRolesService: UserRolesService,
		private authService: AuthService,
		private router: Router,
		private destroyRef?: DestroyRef
	) {
	}

	get isCurrentUser(): boolean {
		return (this.id !== undefined) && (this.id === this.authService.userId);
	}

	ngOnInit() {
		this.route.params.pipe(
			takeUntilDestroyed(this.destroyRef),
			switchMap((params: Params) => {
				this.id = params['id'] ? parseInt(params['id']) : undefined;

				if (!this.id) {
					return of(undefined);
				}

				return this.usersService.getById$(this.id);
			})
		).subscribe((user?: User) => {
			this.updateForm(user);
		});

		this.userRolesService.getAll$()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((userRoles: UserRole[]) => {
				this.userRoleOptions = userRoles.map((userRole: UserRole) => ({
					viewValue: userRole.name,
					value: userRole.id
				}));

				if (this.userRoleOptions.length) {
					this.roleIdControl.setValue(this.userRoleOptions[0].value)
				}
			})
	}

	onSubmit(id?: number) {
		if (id) {
			this.usersService.update$({
				id,
				username: this.usernameControl.value,
				roleId: this.roleIdControl.value,
			} as User).subscribe(() => {
				this.navigateToUsers();
			});
		} else {
			this.authService.signUp$({
				username: this.usernameControl.value,
				password: this.passwordControl.value,
				roleId: this.roleIdControl.value,
			}).subscribe((user: { id: number }) => {
				this.navigateToUser(user.id);
			})
		}
	}

	navigateToUsers() {
		this.router.navigateByUrl('/users');
	}

	navigateToUser(id: number) {
		this.router.navigateByUrl(`/users/${id}`);
	}

	updateForm(user?: User) {
		if (user) {
			this.usernameControl.setValue(user.username);
			this.roleIdControl.setValue(user.role.id);
		} else {
			this.form.addControl('password', this.passwordControl);
		}
	}

	onDelete(id: number) {
		this.usersService.delete$(id).subscribe(() => {
			if (this.isCurrentUser) {
				this.authService.signOut();
				this.router.navigateByUrl('/auth/sign-in');
			} else {
				this.navigateToUsers()
			}
		})
	}

	openChangePasswordDialog(id: number): void {
		const dialogRef = this.dialog.open(
			ChangePasswordDialogComponent,
			{ data: { id } }
		);

		dialogRef.afterClosed().subscribe((passwordHasChanged: boolean) => {
			if (passwordHasChanged && this.isCurrentUser) {
				this.authService.signOut();
				this.router.navigateByUrl('/auth/sign-in');
			}
		});
	}
}
