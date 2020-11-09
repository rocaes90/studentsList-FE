
import React, { ReactElement } from 'react'

import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy'

import './index.css'
import App from './App'
import store from './store'
import reportWebVitals from './reportWebVitals'

function Root(): ReactElement {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<Root />, rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
