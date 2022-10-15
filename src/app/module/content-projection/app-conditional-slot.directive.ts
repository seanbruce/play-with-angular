import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAppConditionalSlot]',
})
export class AppConditionalSlotDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
