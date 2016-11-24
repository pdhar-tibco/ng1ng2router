import {Component} from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello</h1>
    <a routerLink="../world">World</a>
    <a routerLink="../">Back</a>
    <a routerLink="/messages/inbox">Inbox</a>
  `
})
export class HelloCmp {
}