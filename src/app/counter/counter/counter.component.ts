import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterOfParent:number=0;
  message:string='';
  messageRecievedUsingViewChild:string | undefined;

  @ViewChild(CounterButtonsComponent) childComponent: CounterButtonsComponent | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  onIncrement() {
      this.counterOfParent++;
      this.messageRecievedUsingViewChild=this.childComponent?.someData;
  }

  onDecrement() {
      this.counterOfParent--;
  }

  onReset(){
    this.counterOfParent=0;
  }


  onRecieveSomeMessageFromChild($event: string){
    this.message=$event;
  }
}
