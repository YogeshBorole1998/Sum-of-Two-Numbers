import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addition-parent',
  templateUrl: './addition-parent.component.html',
  styleUrls: ['./addition-parent.component.css']
})
export class AdditionParentComponent implements OnInit {
  @Output() additionEvent = new EventEmitter<number>();
  firstnum!: string;
  secondnum!: string;
  result!: number;
  constructor() { }

  ngOnInit(): void {
  }
  addNum() {
    this.result = parseInt(this.firstnum)+parseInt(this.secondnum);
    this.additionEvent.emit(this.result);
  
  }
}
