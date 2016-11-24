
// This module was fully migrated to Angular 2
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HelloWorldCmp } from './helloworld_cmp';
import { WorldCmp } from './world_cmp';
import { HelloCmp } from './hello_cmp';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'helloworld', 
        component: HelloWorldCmp, 
        children: [
            { path: 'hello', component: HelloCmp },
            { path: 'world', component: WorldCmp },
            { path: '', redirectTo: "hello" },
      ] },
    ])
  ],
  declarations: [HelloWorldCmp,HelloCmp, WorldCmp]
})
export class HelloWorldNgModule {
}