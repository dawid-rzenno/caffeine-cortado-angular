import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-crud-table-column',
  template: '', // no HTML; acts as a container for templates
})
export class CrudTableColumnComponent {
	@Input({ required: true }) name!: string;

	// Capture header and cell templates from parent
	@ContentChild('header', { static: true }) headerTemplate!: TemplateRef<any>;
	@ContentChild('cell', { static: true }) cellTemplate!: TemplateRef<any>;
}
