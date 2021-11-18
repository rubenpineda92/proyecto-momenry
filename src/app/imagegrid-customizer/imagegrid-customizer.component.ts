import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagegrid-customizer',
  templateUrl: './imagegrid-customizer.component.html',
  styleUrls: ['./imagegrid-customizer.component.css']
})
export class ImagegridCustomizerComponent implements OnInit {

  constructor(private elem: ElementRef) {

   }

  ngOnInit(): void {
  }

  updateDropdown(open:boolean){
    const iconDropdown = this.elem.nativeElement.querySelector('#arrow-icon')
    console.log(iconDropdown)
    if(open){
      
      (iconDropdown as Element).classList.add('active')
    }else{
      (iconDropdown as Element).classList.remove('active')
    }
  }
  
  remarkIcon(event:MouseEvent){

    const selected =  (event.currentTarget as Element);

    if(!selected.classList.contains('active')){
      const otherButton = this.elem.nativeElement.querySelector('.icons.active');
      if(otherButton){
        (otherButton as Element).classList.remove('active')
      }
      
      selected.classList.toggle('active')
    }
  }

}
