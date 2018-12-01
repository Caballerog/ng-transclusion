import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'am-repeat-ng-template',
  template: `
    <p>
      Repeated {{ times }} times:
      <ng-container *ngFor="let _ of sequence()" [ngTemplateOutlet]="template"></ng-container>
    </p>
  `
})
export class RepeatNGTemplateComponent {
  @Input() times = 1;

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  sequence() {
    return new Array(this.times);
  }
}
