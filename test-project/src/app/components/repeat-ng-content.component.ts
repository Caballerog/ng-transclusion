import { Component, Input } from '@angular/core';

@Component({
  selector: 'am-repeat-ng-content',
  template: `
    <p>
      Repeated {{ times }} times:
      <ng-content *ngFor="let _ of sequence()"></ng-content>
    </p>
  `
})
export class RepeatNGContentComponent {
  @Input() times = 1;

  sequence() {
    return new Array(this.times);
  }
}
