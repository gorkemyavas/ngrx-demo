import { createReducer, on }           from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState: number = Number(localStorage.getItem('count') || 0);

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {

    localStorage.setItem('dummy', JSON.stringify(Dummy_data));

    let data = JSON.parse(localStorage.getItem('dummy') || '{}');
    console.log(data);
    state++;
    localStorage.setItem('count', state.toString());
    return state;
  }),

  on(decrement, (state) => {
    state--;
    localStorage.setItem('count', state.toString());
    return state;
  }),

  on(reset, (state) => {
    state = 0;
    localStorage.setItem('count', state.toString());
    return state;
  })
);

export const Dummy_data = {
  user: {
    id: 1,
    name: 'görkem'
  },
  location: {
    postalCode: 34460,
    name: 'Sarıyer'
  }
};
