import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

const modules = [MatSlideToggleModule, MatFormFieldModule, MatDialogModule];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
