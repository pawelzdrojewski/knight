import { Component } from '@angular/core';
import { PointXY } from './point-xy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skoczek';

  punktRodzic: PointXY = {x: 4 ,y: 6}
  //rodzic: string  = 'Cześć'


}
