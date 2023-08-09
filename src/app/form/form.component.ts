import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PointXY } from '../point-xy';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() zm_form?: number;
  
  point?: PointXY



  myForm: FormGroup = new FormGroup({
    startX: new FormControl('', [Validators.required, Validators.min(0), Validators.max(8)]),
    startY:  new FormControl() 
  })

  setPoint(){
   console.log(Number(this.myForm.value.startX) + Number(this.myForm.value.startY) )
  }

}
