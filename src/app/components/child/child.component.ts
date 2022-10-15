import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() countFromParent!: number;

  countWithinChild = 0;

  increaseCount() {
    this.countWithinChild++;
  }

  constructor() {
    console.log('call constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('call change');
  }

  ngOnInit(): void {
    console.log('call init');
  }

  ngDoCheck(): void {
    console.log('call do check');
  }

  ngAfterContentInit(): void {
    console.log('call after content init');
  }

  ngAfterContentChecked(): void {
    console.log('call after content checked');
  }

  ngAfterViewInit(): void {
    console.log('call after view init');
  }

  ngAfterViewChecked(): void {
    console.log('call after view checked');
  }

  ngOnDestroy(): void {
    console.log('call destroy');
  }
}
