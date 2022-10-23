import { AppConditionalSlotDirective } from './../app-conditional-slot.directive';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-conditional-slot-parent',
  templateUrl: './conditional-slot-parent.component.html',
  styleUrls: ['./conditional-slot-parent.component.css'],
})
export class ConditionalSlotParentComponent implements OnInit {
  expanded = false;
  @ContentChild(AppConditionalSlotDirective)
  content!: AppConditionalSlotDirective;

  constructor() {}

  ngOnInit(): void {}

  toggleVisibility() {
    this.expanded = !this.expanded;
  }
}
