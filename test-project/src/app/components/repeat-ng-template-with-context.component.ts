import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'am-repeat-ng-template-with-context',
  template: `
    <p>
      Repeated {{ times }} times:
      <ng-container
        *ngFor="let _ of sequence(); index as index; let isFirst = first; last as isLast"
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ $implicit: index, isFirst: isFirst, isLast: isLast }"
      ></ng-container>
    </p>
  `
})
export class RepeatNGTemplatewithContextComponent {
  @Input() times = 1;

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  sequence() {
    return new Array(this.times);
  }
}
