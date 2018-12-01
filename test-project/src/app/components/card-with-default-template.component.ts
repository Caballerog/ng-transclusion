import { Component, ContentChild, TemplateRef, Directive } from '@angular/core';

@Directive({ selector: '[amCardTitle]' }) export class CardTitleDirective { }
@Directive({ selector: '[amCardSubtitle]' }) export class CardSubtitleDirective { }
@Directive({ selector: '[amCardBody]' }) export class CardBodyDirective { }


@Component({
  selector: 'am-card-with-default-template',
  template: `
    <div class="card">
      <img src="assets/card.png" />
      <div class="container">
        <h3 [ngTemplateOutlet]="cardTitleTmpl || defaultTitle"></h3>
        <h4 [ngTemplateOutlet]="cardSubtitleTmpl || defaultSubtitle"></h4>
        <p [ngTemplateOutlet]="cardBodyTmpl || defaultBody"></p>
      </div>
    </div>

    <ng-template #defaultTitle>This card hasn't title 😢</ng-template>
    <ng-template #defaultSubtitle>This card hasn't subtitle 😭</ng-template>
    <ng-template #defaultBody>This card hasn't body 😵</ng-template>
  `,
  styleUrls: ['card.component.css'],
})
export class CardWithDefaultTemplateComponent {
  @ContentChild(CardTitleDirective, { read: TemplateRef }) cardTitleTmpl: TemplateRef<any>;
  @ContentChild(CardSubtitleDirective, { read: TemplateRef }) cardSubtitleTmpl: TemplateRef<any>;
  @ContentChild(CardBodyDirective, { read: TemplateRef }) cardBodyTmpl: TemplateRef<any>;
}
