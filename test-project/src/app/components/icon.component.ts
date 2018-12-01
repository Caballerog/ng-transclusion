import { Component, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'am-icon',
  template: `
    <!-- A bit tricky... 🤟🏻 -->
    <span #content [hidden]="true"><ng-content></ng-content></span>
    <ng-container [ngSwitch]="icon">
      <ng-container *ngSwitchCase="'fire'">🔥</ng-container>
      <ng-container *ngSwitchCase="'heavy'">🤟🏻</ng-container>
      <ng-container *ngSwitchDefault>🖖🏻</ng-container>
    </ng-container>
  `,
})
export class IconComponent implements AfterContentChecked {
  icon: string;

  @ViewChild('content') content: ElementRef<HTMLSpanElement>;

  // Using OnPush we need to run change detection by hand
  ngAfterContentChecked() {
    if (this.icon !== this.content.nativeElement.textContent) {
      this.icon = this.content.nativeElement.textContent;
    }
  }
}
