import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showComponent = false;
  countFromParent = 0;

  increaseCount() {
    this.countFromParent++;
  }

  toggleShowComponent() {
    this.showComponent = !this.showComponent;
  }
}
