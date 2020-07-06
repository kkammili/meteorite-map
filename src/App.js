import React from 'react'
import WrappedMap from './modules/Maps/components/Maps.js'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <WrappedMap />
        </Provider>

    )
}

export default App
