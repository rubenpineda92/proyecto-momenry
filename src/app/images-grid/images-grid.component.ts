import { Component, ElementRef, OnInit } from '@angular/core';
import { AppImage } from '../models/Images';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit {

  arrImages:AppImage[] = [];
  numCols:number = 5
  fixIconUrl:string = 'assets/icons/icon_fix.svg';
  fixedIconUrl:string = 'assets/icons/icon_fixed.svg';


  constructor(private elem: ElementRef) { 
    for (let i = 0; i < 7; i++) {
      this.arrImages.push({ name: 'Imagen ' + (i + 1), description: 'Descripcion ' + (i + 1), date:new Date()})
    }
  }

  ngOnInit(): void {
    const innerWidth:number = (window.innerWidth * 0.9);
    const imgWidth = 250;

    const supportedColumns = innerWidth / imgWidth;

    this.numCols = supportedColumns >= 2 ? supportedColumns : 2;

  }

  fixDescription(event:MouseEvent, index:number){
    const id:string = 'wrapper-' + index; 

    let hiddenElements:NodeList = this.elem.nativeElement.querySelectorAll('#' + id + ' > .hidden-image-element');

    let fixIcon:any = (event.currentTarget as Element).children[0];

    if(hiddenElements.length > 0){
      hiddenElements.forEach((value:Node) => {
        (value as Element).classList.remove('hidden-image-element');
        (value as Element).classList.add('shown-image-element');
      })

      fixIcon.src=this.fixedIconUrl;
    }else{
      let shownElements = this.elem.nativeElement.querySelectorAll('#' + id + ' > .shown-image-element');
      shownElements.forEach((value:Node) => {
        (value as Element).classList.remove('shown-image-element');
        (value as Element).classList.add('hidden-image-element');
      })

      fixIcon.src=this.fixIconUrl;
    }
  }

  

}
