import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-main-navbar>
    <router-outlet></router-outlet>
  </app-main-navbar>`,
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
