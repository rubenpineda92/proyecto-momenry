import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Letter } from '../models/Letter';

@Component({
  selector: 'app-alphabet-list',
  templateUrl: './alphabet-list.component.html',
  styleUrls: ['./alphabet-list.component.css']
})
export class AlphabetListComponent implements OnInit {

  alphabet:Letter[] = [
    {letter:'A', color:'#FF6F00', order: 1},
    {letter:'B', color:'#FFCC00', order: 2},
    {letter:'C', color:'#92EC5D', order: 3},
    {letter:'D', color:'#0DE3C0', order: 4},
    {letter:'E', color:'#0D87E3', order: 5},
  ];

  @Output() letterSelectionEvent = new EventEmitter<Letter>();

  constructor() { }

  ngOnInit(): void {
    this.letterSelectionEvent.emit(this.alphabet[3]);
  }

  notifyChangedLetter(letter:Letter){
    this.letterSelectionEvent.emit(letter);
  }

}
