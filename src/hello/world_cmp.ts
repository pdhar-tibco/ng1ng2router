import {Component} from '@angular/core';

@Component({
  selector: 'world',
  template: `
    <h1>World</h1>
    <a routerLink="../hello">Hello</a>
    <a routerLink="../">Back</a>
    <a routerLink="/messages/inbox">Inbox</a>
  `
})
export class WorldCmp {
}