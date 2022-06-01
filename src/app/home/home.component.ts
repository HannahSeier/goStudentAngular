import { Component } from '@angular/core';

@Component({ selector: 'bs-home',
  template: `
    <div class="ui inverted vertical masthead center aligned segment ">
        <div class="hannah">
          <br/>
          <br/>
        <h1>Willkommen bei GoStudent Nachhilfe </h1>
          <br/>

        <h2>Du suchst nach einem Tutor oder möchtest selbst gerne Nachhilfe geben? :) </h2>
          <br/>
          <h2>Dann bist du hier genau richtig.<br/> Account anlegen, Termine auswählen, und los geht´s</h2>
          <br/>
          <br/>
        <a routerLink="../courses" class="ui red button">
            Kursliste ansehen
        </a>
        <br/>
          <br/>
          <br/>
        </div>
      <div>
      </div>
    </div>
    <br/>
    <div class="bImage">
      <img class="bImage">
    </div>
  `,
  styles: [] })
export class HomeComponent { }
