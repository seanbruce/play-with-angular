import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-element',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  inputValue1 = 'cyberpunk 2077';
  inputValue2 = { value: 'call of duty modern warfare 2' };
  input3FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  updateInputValue1(event: Event) {
    this.inputValue1 = (event.target as HTMLInputElement).value;
  }
  resetInputValue1(inputElm: HTMLInputElement) {
    inputElm.value = '';
    this.inputValue1 = '';
  }
  resetInputValue2() {
    this.inputValue2.value = '';
  }
  resetInputValue3() {
    this.input3FormControl.reset();
  }
}
