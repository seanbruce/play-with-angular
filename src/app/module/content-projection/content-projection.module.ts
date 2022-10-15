import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MultiSlotParentComponent } from './multi-slot-parent/multi-slot-parent.component';
import { ConditionalSlotParentComponent } from './conditional-slot-parent/conditional-slot-parent.component';
import { AppConditionalSlotDirective } from './app-conditional-slot.directive';

@NgModule({
  declarations: [IndexComponent, ParentComponent, ChildComponent, MultiSlotParentComponent, ConditionalSlotParentComponent, AppConditionalSlotDirective],
  imports: [CommonModule],
  exports: [IndexComponent],
})
export class ContentProjectionModule {}
