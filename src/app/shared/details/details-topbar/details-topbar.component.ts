import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-details-topbar',
	imports: [
		MatButtonModule,
		MatIconModule,
		RouterLink,
		NgTemplateOutlet
	],
  templateUrl: './details-topbar.component.html',
  styleUrl: './details-topbar.component.scss'
})
export class DetailsTopbarComponent {
	@Input({ required: true }) isFormDirty!: boolean;
	@Input({
		required: true,
		transform: (arg: null | boolean) => !!arg
	}) isNew!: boolean;

	@Input() title?: string;
	
	@Input() titleTemplate?: TemplateRef<any>;
	@Input() deleteButtonTemplate?: TemplateRef<any>;
	@Input() additionalButtonsTemplate?: TemplateRef<any>;

	@Output() onReset = new EventEmitter();
	@Output() onDelete = new EventEmitter();
}
