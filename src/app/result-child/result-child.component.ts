import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-child',
  templateUrl: './result-child.component.html',
  styleUrls: ['./result-child.component.css']
})
export class ResultChildComponent implements OnInit {
 result!:number;
  constructor() { }

  ngOnInit(): void {
  }
  displayResult(arg:number){
this.result=arg;
  }
}
