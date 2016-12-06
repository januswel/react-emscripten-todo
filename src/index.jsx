import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './redux/containers/app.jsx'
import store from './redux/store.js'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
