import { LocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';
import { PointXY } from '../point-xy';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})


export class KnightComponent implements OnInit {


  //@Input() private point?: PointXY
  //@Input() dziecko?: string

  @Input() punktDziecko?: PointXY

  zm_king?: number = 11

  y: number = 0;
  x: number = 0;
  n: number = 0;
  a: number = 8;
  b: number = 8;

  constructor() {}

  ngOnInit(): void {
    console.log(this.punktDziecko)
  }
 // const horse:  string = "♞";
 matrix: number[][] = [[],[],[],[],[],[],[],[]];
 tablica: number[][] = [[],[],[],[],[],[],[],[]];

 flat_matrix: number[] = [];

 kroki: krok[] = [];

 setStartPosition(x: number, y: number){
  this.x = x
  this.y = y
 }

ruch: ruch[] =[{ X: (this.x  ), Y: (this.y  ) }, //0
               { X: (this.x-2), Y: (this.y+1) }, //1
               { X: (this.x-1), Y: (this.y+2) }, //2
               { X: (this.x+1), Y: (this.y+2) }, //3
               { X: (this.x+2), Y: (this.y+1) }, //4  
               { X: (this.x+2), Y: (this.y-1) }, //5
               { X: (this.x+1), Y: (this.y-2) }, //6
               { X: (this.x-1), Y: (this.y-2) }, //7
               { X: (this.x-2), Y: (this.y-1) }  //8
            ];

  trasa(x: number, y: number, n: number){
    this.matrix[x][y] = n;
    this.kroki.push({X: x, Y: y});
   // console.log(`n:${this.matrix[x][y]} x:${x} y:${y}`);
    if(x-2>=0 && x-2<=7 && y+1>=0 && y+1<=7 && !(this.matrix[x-2][y+1] > 0)){ //PGG
        x = x-2; y = y+1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`1 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n)
    }
    if (x-1>=0 && x-1<=7 && y+2>=0 && y+2<=7 && !(this.matrix[x-1][y+2] > 0)) {//PPG
        x = x-1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
         this.matrix[x][y] = n;
         console.log(`2 n:${this.matrix[x][y]} x:${x} y:${y}`);
         this.trasa(x, y, n)
    }
    if (x+1>=0 && x+1<=7 && y+2>=0 && y+2<=7 && !(this.matrix[x+1][y+2] > 0)) { //PPD
        x = x+1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`3 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n)
    }
    if (x+2>=0 && x+2<=7 && y+1>=0 && y+1<=7 && !(this.matrix[x+2][y+1] > 0)) { //PDD
        x = x+2; y = y+1; n++;
        this.matrix[x][y] = n;
        this.kroki.push({X: x, Y: y});
        console.log(`4 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x+2>=0 && x+2<=7 && y-1>=0 && y-1<=7 && !(this.matrix[x+2][y-1] > 0)) {//LDD
        x = x+2; y = y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`5 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x+1>=0 && x+1<=7 && y-2>=0 && y-2<=7 && !(this.matrix[x+1][y-2] > 0)) { //LLD
      x = x+1; y = y-2; n++;
      this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`6 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x-1>=0 && x-1<=7 && y-2>=0 && y-2<=7 && !(this.matrix[x-1][y-2] > 0)) { //LLG
        x = x-1; y = y-2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`7 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x-2>=0 && x-2<=7 && y-1>=0 && y-1<=7 && !(this.matrix[x-2][y-1] > 0)) { //LGG
        x= x-2; y=y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        console.log(`8 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
     else {
      console.log("Konic drogi!");
      return
     }

  }   
  test(x: number, y: number, matrix: number[][]){
   this.trasa(x, y, 0)
   this.krok();
  }
 
  krok(){
    const obj = interval(1000);
    const zakres = obj.pipe(take(128));
     zakres.subscribe((a) => {this.tablica[this.kroki[a].X][this.kroki[a].Y] = this.matrix[this.kroki[a].X][this.kroki[a].Y]; this.a = a;});
  }

  zeruj(m: number[][]){
    this.matrix = [[],[],[],[],[],[],[],[]];
    this.tablica = [[],[],[],[],[],[],[],[]];
    this.n = 0;
  }  
}

type ruch={
  X: number;
  Y: number;
}
interface trasa{
  (x:  number, y: number, matrix: number[][], n: number): number;
}

type krok={
  X: number;
  Y: number;
}