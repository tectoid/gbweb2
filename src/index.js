import React from 'react'
import { render } from 'react-dom'
import Map from './components/Map'
import ControlPanel from './components/ControlPanel'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
require ('./main.css')

const store = createStore(reducer)


render(
    <Provider store={store}>
        <div>
        <Map/>
        <ControlPanel />
        </div>
    </Provider>,
    document.getElementById('root'))