import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { IState } from '../state/IState';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {



  public someData:string='some data';

  constructor(private store:Store<IState>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment())
}

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

  onAnActionOfYourChoice () {

  }

}
