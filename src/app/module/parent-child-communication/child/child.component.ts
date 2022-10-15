import { Component, OnInit, Input } from '@angular/core';

export interface Ref {
  current: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() primitiveValue!: string;
  @Input('ref') complexValue!: Ref;

  constructor() {}

  ngOnInit(): void {}
}
