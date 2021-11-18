import { Component, HostBinding } from '@angular/core';
import { Letter } from './models/Letter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'images-board';

  @HostBinding("style.--markerPosition")
  markerPosition:string = '220px';


  currentLetter:Letter = {
    letter:'',
    color:'white',
    order: 0
  };

  updateCurrentLetter(letter:Letter){
    console.log('Ejecutando event con letra');
    console.log(letter);
    this.currentLetter = letter;

    const orden:number = this.currentLetter.order;
    const posicion:number = (orden * 40) + (orden - 1) * 20;

  

    this.markerPosition = posicion + 'px';
  }
}
