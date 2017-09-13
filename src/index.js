import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import Users from './sampleUser.json'
import reducer from './redux'
import './index.css'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
