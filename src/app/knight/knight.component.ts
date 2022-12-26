import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';



@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnInit {
  y: number = 0;
  x: number = 7;
  n: number = 0;
  a: number = 8;
  b: number = 8;


  constructor() {}

  ngOnInit(): void {}
//
  //matrix: string[][] = [[],[],[],[],[],[],[],[]];
 // linear: string[] = [];
 // const horse:  string = "♞";
 //matrix: krok[][] = [[],[],[],[],[],[],[],[]];
 matrix: string[][] = [[],[],[],[],[],[],[],[]];

 flat_matrix: number[] = [];
 //trasa: number[] =[];

 kroki: krok[] = [];


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
    this.matrix[x][y] = `${n}`;
    this.kroki.push({X: x, Y: y});
   // console.log(`n:${this.matrix[x][y]} x:${x} y:${y}`);
    if(x-2>=0 && x-2<=7 && y+1>=0 && y+1<=7 && this.matrix[x-2][y+1] != ``){
        x = x-2; y = y+1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`1 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n)
    }
    if (x-1>=0 && x-1<=7 && y+2>=0 && y+2<=7 && this.matrix[x-1][y+2] != ``) {
        x = x-1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
         this.matrix[x][y] = `${n}`;
         console.log(`2 n:${this.matrix[x][y]} x:${x} y:${y}`);
         this.trasa(x, y, n)
    }
    if (x+1>=0 && x+1<=7 && y+2>=0 && y+2<=7 && this.matrix[x+1][y+2] != ``) { 
        x = x+1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`3 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n)
    }
    if (x+2>=0 && x+2<=7 && y+1>=0 && y+1<=7 && this.matrix[x+2][y+1] != ``) {
        x = x+2; y = y+1; n++;
        this.matrix[x][y] = `${n}`;
        this.kroki.push({X: x, Y: y});
        console.log(`4 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x+2>=0 && x+2<=7 && y-1>=0 && y-1<=7 && this.matrix[x+2][y-1] != ``) {
        x = x+2; y = y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`5 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x+1>=0 && x+1<=7 && y-2>=0 && y-2<=7 && this.matrix[x+1][y-2] != ``) {
      x = x+1; y = y-2; n++;
      this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`6 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x-1>=0 && x-1<=7 && y-2>=0 && y-2<=7 && this.matrix[x-1][y-2] != ``) {
        x = x-1; y = y-2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`7 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
    if (x-2>=0 && x-2<=7 && y-1>=0 && y-1<=7 && this.matrix[x-2][y-1] != ``) {
        x= x-2; y=y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = `${n}`;
        console.log(`8 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.trasa(x, y, n);
    }
     else {
      console.log("Konic drogi!");
     }

  }   
  test(x: number, y: number, matrix: string[][]){
   // this.krok(this.ruch2, this.n);
   // this.krok(this.ruch, this.n);
   //this.print(this.ruch, this.n);
  // this.krok(this.ruch, this.n);
   this.trasa(x, y, this.n)
   this.krok(this.kroki, this.n);
  }
 
  krok(ruch: ruch[], n: number){
    const obj = interval(1000);
    const zakres = obj.pipe(take(3));
     zakres.subscribe((a) => {this.matrix[this.kroki[a].X][this.kroki[a].Y]= `${n++}`; this.a = a; console.log(this.matrix[ruch[a].X][ruch[a].Y])});
//    zakres.subscribe((a) => {this.kroki[a]= this.kroki[a]; this.a = a; console.log(this.matrix[ruch[a].X][ruch[a].Y])});

  }

  zeruj(m: string[][]){
    this.matrix = [[],[],[],[],[],[],[],[]];
    this.n = 0;
  }  
}

type ruch={
  X: number;
  Y: number;
}
interface trasa{
  (x:  number, y: number, matrix: string[][], n: number): number;
}

type krok={
  X: number;
  Y: number;
  //R: ruch,
  //forward: boolean;
}