import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faEdit,
  faInfoCircle,
  faPlus,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],

})
export class FontAwesomeIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faEdit,
      faTrashAlt,
      faInfoCircle,
      faPlus
    );
  }
}
