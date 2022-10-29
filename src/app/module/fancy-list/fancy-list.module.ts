import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { FancyListDirective } from './fancy-list.directive';
import { FancyListComponent } from './fancy-list/fancy-list.component';

@NgModule({
  declarations: [IndexComponent, FancyListDirective, FancyListComponent],
  imports: [CommonModule],
  exports: [IndexComponent],
})
export class FancyListModule {}
