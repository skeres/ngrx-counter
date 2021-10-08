import { createReducer, on} from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { intialState } from "./counter.state";
import { IState } from "./IState";






export const counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    console.log('>>>increment');
    console.log('>>> state.counter='+state.counter);
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

