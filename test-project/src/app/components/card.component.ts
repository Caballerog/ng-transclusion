import { Component } from '@angular/core';

@Component({
  selector: 'am-card',
  template: `
    <div class="card">
      <img src="assets/card.png" />
      <div class="container">
        <h3><ng-content select="[card-title]"></ng-content></h3>
        <h4><ng-content select="[card-subtitle]"></ng-content></h4>
        <p><ng-content select="[card-body]"></ng-content></p>
      </div>
    </div>
  `,
  styleUrls: ['card.component.css'],
})
export class CardComponent { }
