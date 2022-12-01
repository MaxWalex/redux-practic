import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

const initialState = {value: 0, strin: 234};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state, // взяли предыдущий стейт, развернули его
        value: state.value + 1 // изменили то что нам нужно
      };
    case 'DEC':
    return {
      ...state,
      value: state.value - 1
    };
    case 'RND':
    return {
      ...state,
      value: state.value * action.payload
    };
    default:
      return state;
  }
}

const store = createStore(reducer)

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = value => ({type: 'RND', payload: value})

const update = () => {
  document.querySelector('#counter').textContent = store.getState().value
}

store.subscribe(update)

document.querySelector('#inc').addEventListener('click', () => {
  store.dispatch(inc());
})

document.querySelector('#dec').addEventListener('click', () => {
  store.dispatch(dec());
})

document.querySelector('#rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  store.dispatch(rnd(value));
})

// let state = reducer(initialState, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// state = reducer(state, {type: 'INC'})
// console.log(state)

ReactDOM.render(
  <React.StrictMode>
    <>
      
    </>
  </React.StrictMode>,
  document.getElementById('root')
)

