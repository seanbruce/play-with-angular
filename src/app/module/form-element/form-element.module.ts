import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [IndexComponent],
})
export class FormElementModule {}
