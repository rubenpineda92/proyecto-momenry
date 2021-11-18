import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letter } from '../models/Letter';

@Component({
  selector: 'app-letter-button',
  templateUrl: './letter-button.component.html',
  styleUrls: ['./letter-button.component.css']
})
export class LetterButtonComponent implements OnInit {

  @Input() letter:Letter = {
    letter: '',
    color: '',
    order:0
  };
  constructor() { 
  }

  ngOnInit(): void {
  }

}
