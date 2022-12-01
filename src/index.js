import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions'

const store = createStore(reducer)

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.querySelector('#counter').textContent = getState().value
}

subscribe(update)

// custom creater
// const bindActoinCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// of reduce
// bindActionCreators

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd
// }, dispatch)
const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

document.querySelector('#inc').addEventListener('click', inc)

document.querySelector('#dec').addEventListener('click', dec)

document.querySelector('#rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rnd(value)
})

ReactDOM.render(
  <React.StrictMode>
    <>
      
    </>
  </React.StrictMode>,
  document.getElementById('root')
)

