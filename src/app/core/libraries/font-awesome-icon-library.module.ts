import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from "@angular/core";
import {
  faCaretDown,
  faChevronRight,
  faClose, faEdit,
  faHeartPulse,
  faMugHot,
  faPlus,
  faWarning
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconLibraryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCaretDown,
      faMugHot,
      faPlus,
      faClose,
      faWarning,
      faHeartPulse,
      faChevronRight,
      faEdit
    );
  }
}
