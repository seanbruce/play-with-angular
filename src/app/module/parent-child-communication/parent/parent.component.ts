import { Component, OnInit } from '@angular/core';
import type { Ref } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  ageRef: Ref = { current: 32 };
  name = 'sean';
  address = '';

  constructor() {}

  ngOnInit(): void {}

  changeName() {
    this.name = this.name === 'sean' ? 'jobs' : 'sean';
  }

  changeAge() {
    this.ageRef.current++;
  }

  updateAddress(...props: any[]) {
    console.log(props);
  }
}
