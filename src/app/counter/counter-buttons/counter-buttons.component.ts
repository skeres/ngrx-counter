import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Output() incrementFromChild=new EventEmitter();
  @Output() decrementFromChild=new EventEmitter();
  @Output() resetFromChild=new EventEmitter();
  @Output() messageFromChild=new EventEmitter<string>();

  public someData:string='some data';

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.incrementFromChild.emit('Button Increment has been clicked');
}

  onDecrement() {
    this.decrementFromChild.emit();
  }

  onReset(){
    this.resetFromChild.emit();
    this.onAnActionOfYourChoice();
  }

  onAnActionOfYourChoice () {
    this.messageFromChild.emit('counter has been reset at '+new Date().toTimeString());
  }

}
