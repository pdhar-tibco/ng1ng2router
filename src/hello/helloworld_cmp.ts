import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h1>HelloWorld</h1>
    <a routerLink="hello">Hello</a>
    <a routerLink="world">World</a>
    <a routerLink="../">Back</a>
    <a routerLink="/messages/inbox">Inbox</a>
    <router-outlet></router-outlet>
  `
})
export class HelloWorldCmp {
}