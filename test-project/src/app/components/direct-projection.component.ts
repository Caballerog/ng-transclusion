import { Component } from '@angular/core';

@Component({
  selector: 'am-direct-projection',
  template: `
    Like a mirror...<br />
    <ng-content *ngIf="show"></ng-content><br />

    <button type="button" (click)="show = !show">Show/Hide projection</button>
  `
})
export class DirectProjectionComponent {
  show = true;
}
