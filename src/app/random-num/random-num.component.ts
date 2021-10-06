import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-num',
  templateUrl: './random-num.component.html',
  styleUrls: ['./random-num.component.css']
})
export class RandomNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result:any;

  num1 = Math.floor(Math.random() * 46);
  num2 = Math.floor(Math.random() * 46);
  num3 = Math.floor(Math.random() * 46);
  num4 = Math.floor(Math.random() * 46);
  num5 = Math.floor(Math.random() * 46);
  num6 = Math.floor(Math.random() * 46);


  getNum1(){
    this.result = this.num1;
  }

  getNum2(){
    this.result = this.num2;
  }

  getNum3(){
    this.result = this.num3;
  }

  getNum4(){
    this.result = this.num4;
  }

  getNum5(){
    this.result = this.num5;
  }

  getNum6(){
    this.result = this.num6;
  }

}
