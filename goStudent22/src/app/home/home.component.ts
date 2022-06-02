import { Component } from '@angular/core';

@Component({ selector: 'bs-home',
  template: `

<div class="card">
        <h1>Willkommen bei GoStudent Nachhilfe </h1>
          <br/>

        <h2>Du suchst nach einem Tutor oder möchtest selbst gerne Nachhilfe geben? :) </h2>
          <br/>
          <h2>Dann bist du hier genau richtig.<br/> Account anlegen, Termine auswählen, und los geht´s</h2>
          <br/>
          <br/>
          <br/>
 <button type="button" class="fill" routerLink="../courses" >
            Kursliste ansehen
        </button>
        </div>

        <br/>
<br/>
<br/>
    <br/>
    <div class="bImage">
      <img class="bImage">
    </div>
  `,
  styles: [] })
export class HomeComponent { }
