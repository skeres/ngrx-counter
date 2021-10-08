import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterOfParent:number=0;

  constructor() { }

  ngOnInit(): void {

  }

  onIncrement() {
      this.counterOfParent++;
  }

  onDecrement() {
      this.counterOfParent--;
  }

  onReset(){
    this.counterOfParent=0;
  }


}
