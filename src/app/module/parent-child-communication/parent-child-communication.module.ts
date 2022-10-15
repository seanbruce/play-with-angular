import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, IndexComponent],
  imports: [CommonModule],
  exports: [IndexComponent],
})
export class ParentChildCommunicationModule {}
