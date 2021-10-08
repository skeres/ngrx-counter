import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, DoCheck {



  counterOfChild:number=0;
  zz:number=0;
  constructor(private store:Store<{myCounterForRoot:{counter:number}}>) { }


  ngDoCheck(): void {
    console.log(this.counterOfChild);
  }

  ngOnInit(): void {
   // subscribe via pipe() => on pourrait enchainer plusieurs fonctions dans le pipe !!
   this.store.pipe(select('myCounterForRoot')).subscribe(data => this.counterOfChild=data.counter);

   // subscribe avec simple select
   this.store.select('myCounterForRoot').subscribe((data) => this.zz = data.counter);




  }



}

