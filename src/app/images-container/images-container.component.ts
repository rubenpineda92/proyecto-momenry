import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../models/Letter';

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.css'],
})
export class ImagesContainerComponent implements OnInit {

  active = 1;

  @Input() currentLetter:Letter = {
    color: 'white',
    letter: '',
    order:0
  };

  constructor() { }

  ngOnInit(): void {
  }


  lorem:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu augue volutpat, venenatis neque at, vestibulum est. In et aliquet nunc, id placerat lectus. In viverra a magna ut rhoncus. Nunc eu euismod dui. Vivamus placerat mauris dui, vitae sollicitudin mi tempus ac. Proin lobortis dolor sit amet dictum interdum. Morbi a ipsum tempus velit congue vulputate. Suspendisse rutrum magna eu urna maximus fermentum. Mauris laoreet dolor vitae arcu convallis, ut posuere justo rhoncus. Vivamus congue eros sed odio accumsan, eu lobortis lectus semper.

  Morbi feugiat tortor augue, eget bibendum elit vulputate sed. Etiam mattis nibh id felis tempus, sit amet imperdiet dui viverra. Donec dapibus a lacus eget egestas. Duis aliquet commodo lacus. Praesent ultricies mauris in lacinia mattis. Praesent erat justo, condimentum ut luctus et, eleifend et odio. Duis nec dui consectetur, lacinia lectus at, venenatis ipsum. Curabitur fringilla dignissim odio, a varius metus. Quisque et lobortis magna, eget efficitur odio. Vivamus maximus magna non erat venenatis commodo. Nam in augue neque. Curabitur imperdiet arcu non quam blandit posuere. Sed mattis eu libero sit amet tristique. Curabitur blandit, magna in dapibus finibus, neque ipsum ornare libero, quis finibus neque nisl id sapien. Sed cursus quam sem, vitae tempor quam gravida sed.
  
  Integer nec molestie felis. In pharetra pulvinar augue, suscipit varius purus pulvinar imperdiet. Sed tincidunt mattis turpis, quis tristique ex varius non. Curabitur posuere sapien quis ex molestie posuere. Quisque pretium leo dictum lacus rutrum, id fermentum sapien consequat. Sed imperdiet pretium ipsum a egestas. Duis fermentum odio in lobortis rutrum. Curabitur et mattis sapien. Nullam finibus, turpis ut vulputate semper, nibh odio congue ante, et bibendum nisi leo eu dolor. Morbi orci libero, dapibus vel sapien at, sagittis cursus eros. Nam sed condimentum justo. Pellentesque sed massa at urna commodo vestibulum vel ut lectus. Ut pretium leo gravida sollicitudin iaculis.
  
  Etiam quis orci ac ex facilisis convallis `;
}
