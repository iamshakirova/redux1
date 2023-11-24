import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const store = configureStore({
    reducer: {
        counter:counterReducer
    }
}, composeWithDevTools())

export default store