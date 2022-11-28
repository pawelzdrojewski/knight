import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnInit {
  x: number = 3;
  y: number = 3;
  constructor() {
   }

  ngOnInit(): void {
  }

  matrix: string[][] = [[],[],[],[],[],[],[],[]];
 // const horse:  string = "♞";

  start = function(x: number, y: number, matrix: string[][]){
    const ruch: ruch[] =[{ X: (x-2), Y: (y+1) },
                         { X: (x-1), Y: (y+2) },
                         { X: (x+1), Y: (y+2) },
                         { X: (x+2), Y: (y+1) },
                         { X: (x+2), Y: (y-1) },
                         { X: (x+1), Y: (y-2) },
                         { X: (x-1), Y: (y-2) },
                         { X: (x-2), Y: (y-1) }
                        ];

    const horse:  string = "♞";
    matrix[x][y] = horse;
   // matrix[ruch[0].X][ruch[0].Y] = horse;
  //  matrix[ruch[1].X][ruch[1].Y] = horse;
  //  matrix[ruch[2].X][ruch[2].Y] = horse;
  //  matrix[ruch[3].X][ruch[3].Y] = horse;
 //   matrix[ruch[4].X][ruch[4].Y] = horse;
  //  matrix[ruch[5].X][ruch[5].Y] = horse;
  //  matrix[ruch[6].X][ruch[6].Y] = horse;
  //  matrix[ruch[7].X][ruch[7].Y] = horse;
    
    const obj = interval(1000);
    //const zakres = obj.s
    obj.subscribe((a) => {
      if(matrix[x][y] === '') {
        matrix[x][y] = horse
      } else
        if(matrix[ruch[0].X][ruch[0].Y] !=''){
          matrix[ruch[0].X][ruch[0].Y] = horse
        }
    
      });

        
        
      //  matrix[ruch[x].X][ruch[y].Y] = horse; x++; y++ }); 

  }
  zeruj = function(matrix: string[][]){ 
   // for(let i=0)
  } 
}
interface ruch{
  X: number;
  Y: number;
}
