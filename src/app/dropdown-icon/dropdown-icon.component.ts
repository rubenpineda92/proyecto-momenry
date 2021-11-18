import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.css']
})
export class DropdownIconComponent implements OnInit {



  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }


  showHiddenMenu(){
    const toggleMenu = this.elem.nativeElement.querySelector('.menu');

    toggleMenu.classList.toggle('active')
  }
}
