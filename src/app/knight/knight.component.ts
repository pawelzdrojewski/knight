import { LocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, delay, interval, last, map, of, take } from 'rxjs';
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
  i: number = 0;



  constructor() {}

  ngOnInit(): void {

    this.stos.push({x: 0, y: 0, n: 0, i: 0})
    //console.log(this.punktDziecko)
  }
 // const horse:  string = "♞";
 matrix: number[][] = [[],[],[],[],[],[],[],[]];
 tablica: number[][] = [[],[],[],[],[],[],[],[]];

 stos: stos[] =[]
 wynik = of(this.stos)
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

  trasa(x: number, y: number, n: number, i: number){
    this.matrix[x][y] = n;
    this.kroki.push({X: x, Y: y});
   // console.log(`n:${this.matrix[x][y]} x:${x} y:${y}`);
   //this.i = 1
    if(x-2>=0 && x-2<=7 && y+1>=0 && y+1<=7 && !(this.matrix[x-2][y+1] > 0)){ //PGG
        i = 1
        x = x-2; y = y+1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`1 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
        console.log(this.stos[n])
        this.trasa(x, y, n, i)
    }
   // this.i = 2
    if (x-1>=0 && x-1<=7 && y+2>=0 && y+2<=7 && !(this.matrix[x-1][y+2] > 0)) {//PPG
      i = 2
        x = x-1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
         this.matrix[x][y] = n;
        //  console.log(`2 n:${this.matrix[x][y]} x:${x} y:${y}`);
         this.stos.push({x, y, n, i})
         console.log(this.stos[n])
         this.trasa(x, y, n, i)
    }
    // this.i = 3
    if (x+1>=0 && x+1<=7 && y+2>=0 && y+2<=7 && !(this.matrix[x+1][y+2] > 0)) { //PPD
      i = 3
        x = x+1; y = y+2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`3 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(x, y, n, i)
    }
    // this.i = 4
    if (x+2>=0 && x+2<=7 && y+1>=0 && y+1<=7 && !(this.matrix[x+2][y+1] > 0)) { //PDD
      i = 4
        x = x+2; y = y+1; n++;
        this.matrix[x][y] = n;
        this.kroki.push({X: x, Y: y});
        // console.log(`4 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(x, y, n, i);
    }
    // this.i = 5
    if (x+2>=0 && x+2<=7 && y-1>=0 && y-1<=7 && !(this.matrix[x+2][y-1] > 0)) {//LDD
        i = 5
        x = x+2; y = y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`5 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(x, y, n, i);
    }
    // this.i = 6
    if (x+1>=0 && x+1<=7 && y-2>=0 && y-2<=7 && !(this.matrix[x+1][y-2] > 0)) { //LLD
      i = 6
      x = x+1; y = y-2; n++;
      this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`6 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(this.stos[n].x, this.stos[n].y, n,  i);
    }
    // this.i = 7
    if (x-1>=0 && x-1<=7 && y-2>=0 && y-2<=7 && !(this.matrix[x-1][y-2] > 0)) { //LLG
      i = 7
        x = x-1; y = y-2; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`7 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(x, y, n, i);
    }
    // this.i = 8
    if (x-2>=0 && x-2<=7 && y-1>=0 && y-1<=7 && !(this.matrix[x-2][y-1] > 0)) { //LGG
        i = 8
        x= x-2; y=y-1; n++;
        this.kroki.push({X: x, Y: y});
        this.matrix[x][y] = n;
        // console.log(`8 n:${this.matrix[x][y]} x:${x} y:${y}`);
        this.stos.push({x, y, n, i})
         console.log(this.stos[n])
        this.trasa(x, y, n, i);
    }
     else {
      console.log("Konic drogi!");
    //   this.stos.splice(-1);
    //  // this.stos[n].n = 0
    //   this.kroki.splice(-1)
    //   this.trasa(this.stos[n-1].x, this.stos[n-1].y, this.stos[n-1].n, this.stos[n-1].i)
    //   return
     }

  }   
  test(x: number, y: number, matrix: number[][]){
   this.trasa(this.stos[0].n, this.stos[0].x, this.stos[0].y, this.stos[0].i)
   this.krok();
  }
 
  krok(){
    //const obj = interval(1000);
   // const zakres = obj.pipe(take(57));
     //zakres.subscribe((a) => {this.tablica[this.kroki[a].X][this.kroki[a].Y] = this.matrix[this.kroki[a].X][this.kroki[a].Y]; this.a = a;});
     this.wynik.pipe(delay(5000), map(a=>{console.log(a)})).subscribe()
  }

  zeruj(m: number[][]){
    this.matrix = [[],[],[],[],[],[],[],[]];
    this.tablica = [[],[],[],[],[],[],[],[]];
    this.stos = [];
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
interface stos{
  x: number,
  y: number,
  n: number,
  i: number
}