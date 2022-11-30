import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, startWith, take } from 'rxjs';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnInit {
  y: number = 3;
  x: number = 4;
  n: number = 0;
  a: number = 10;


  constructor() {}

  ngOnInit(): void {}

  matrix: string[][] = [[],[],[],[],[],[],[],[]];
  linear: string[] = [];
 // const horse:  string = "♞";

ruch: ruch[] =[{ X: (this.x  ), Y: (this.y  ) },
               { X: (this.x-2), Y: (this.y+1) },
               { X: (this.x-1), Y: (this.y+2) },
               { X: (this.x+1), Y: (this.y+2) },
               { X: (this.x+2), Y: (this.y+1) },
               { X: (this.x+2), Y: (this.y-1) },
               { X: (this.x+1), Y: (this.y-2) },
               { X: (this.x-1), Y: (this.y-2) },
               { X: (this.x-2), Y: (this.y-1) }
              ];


kolejny: ruch ={ X: (this.x), Y: (this.y+2) }

//ruch2: ruch[] = [...this.ruch, this.kolejny];

  start(x: number, y: number, matrix: string[][], n: number){
    this.test(x, y, matrix);
    if(matrix[x][y]!= ''){
     this.n=n+1;
      matrix[x][y] = `${this.n}`
      console.log(`n: ${this.n}`);
      this.x= x-2; y = this.y+1;
      
    }

  }
  test(x: number, y: number, matrix: string[][]){
   // this.krok(this.ruch2, this.n);
    this.krok(this.ruch, this.n);
  }
 
  krok(ruch: ruch[], n: number){
    const obj = interval(1000);
    const zakres = obj.pipe(take(9));
    zakres.subscribe((a) => {this.matrix[ruch[a].X][ruch[a].Y]= `${n++}`; this.a = a});
  }
  zeruj(m: string[][]){}
  
}

interface ruch{
  X: number;
  Y: number;
}
interface start{
  (x:  number, y: number, matrix: string[][], n: number): number;
}