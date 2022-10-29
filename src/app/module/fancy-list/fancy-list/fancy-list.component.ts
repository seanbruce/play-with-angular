import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { FancyListDirective } from '../fancy-list.directive';

@Component({
  selector: 'fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.css'],
})
export class FancyListComponent implements OnInit {
  @Input() list!: string[];
  @ContentChild(FancyListDirective) content!: FancyListDirective;
  constructor() {}

  ngOnInit(): void {}
}
