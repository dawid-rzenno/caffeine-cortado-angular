import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { map } from "rxjs";
import { UsersService } from "../users.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { CreateUserPayload, UpdateUserPayload, User, UserDetails } from "../user";
import { MatDialog } from "@angular/material/dialog";
import { ChangePasswordDialogComponent } from "./change-password-dialog/change-password-dialog.component";
import { AuthService } from "../../auth/auth.service";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSelectModule } from "@angular/material/select";
import { UserRolesService } from "../../user-roles/user-roles.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SelectOption } from "../../utils/select-option";
import { UserRole } from "../user-role";
import { DetailsComponent } from "../../shared/details/details.component";
import { AsyncPipe } from "@angular/common";
import { Id } from "../../shared/item-base";
import { DetailsTopbarComponent } from "../../shared/details/details-topbar/details-topbar.component";

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
		MatBadgeModule,
		MatSelectModule,
		AsyncPipe,
		DetailsTopbarComponent
	],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss'
})
export class UserComponent extends DetailsComponent<UserDetails, CreateUserPayload, UpdateUserPayload> implements OnInit {
	userRoleOptions: SelectOption[] = [];

	isCurrentUser$ = this.details$.pipe(
		takeUntilDestroyed(this.destroyRef),
		map(details => details ? this.isCurrentUser(details) : false)
	);

	isCurrentUser(details: UserDetails) {
		return !!this.authService.userId && (details.id === this.authService.userId);
	}

	canUpdateUser$ = this.details$.pipe(
		map(details => details
			? this.isCurrentUser(details) || this.isAdmin
			: false
		),
	)

	readonly usernameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly passwordControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly roleIdControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup<UserFormControls>({
		username: this.usernameControl,
		roleId: this.roleIdControl,
	});

	readonly matDialog = inject(MatDialog);

	get isAdmin(): boolean {
		return this.authService.isAdmin;
	}

	constructor(
		route: ActivatedRoute,
		service: UsersService,
		destroyRef: DestroyRef,
		private userRolesService: UserRolesService,
		private authService: AuthService,
		private router: Router,
	) {
		super(route, service, destroyRef);
	}

	ngOnInit() {
		this.updateFormOnDetailsChange();
		this.updateDetailsOnIdRouteParamChange();
		this.getUserRoles();
	}

	override updateForm(user?: User) {
		if (user) {
			this.usernameControl.setValue(user.username);
			this.roleIdControl.setValue(user.role.id);
			return;
		}

		this.form.addControl('password', this.passwordControl);
		this.form.reset();
	}

	override createItem() {
		this.authService.signUp$({
			username: this.usernameControl.value,
			password: this.passwordControl.value,
			roleId: this.roleIdControl.value,
		}).subscribe((user: { id: number }) => {
			this.navigateToItem(user.id);
		})
	}

	override onDelete(id: number) {
		this.service.delete$(id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => {
				if (this.isCurrentUser$) {
					this.authService.signOut();
					this.navigateToSignIn();
					return;
				}

				this.navigateToItems();
			})
	}

	getUserRoles() {
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

	navigateToItems() {
		this.router.navigateByUrl('/users');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/users/${id}`);
	}

	navigateToSignIn() {
		this.router.navigateByUrl('/auth/sign-in');
	}

	openChangePasswordDialog(id: Id) {
		const dialogRef = this.matDialog.open(
			ChangePasswordDialogComponent,
			{ data: { id } }
		);

		dialogRef.afterClosed()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((passwordHasChanged: boolean) => {
				if (passwordHasChanged && this.isCurrentUser$) {
					this.authService.signOut();
					this.navigateToSignIn();
				}
			});
	}
}
