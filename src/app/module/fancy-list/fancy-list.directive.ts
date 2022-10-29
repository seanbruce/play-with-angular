import { Directive, TemplateRef } from '@angular/core';

interface FancyListContext {
  name: string;
}

@Directive({
  selector: '[skFancyList]',
})
export class FancyListDirective {
  constructor(public templateRef: TemplateRef<FancyListContext>) {}
}
