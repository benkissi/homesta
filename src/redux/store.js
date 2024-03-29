import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'

import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'


const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default { store, persistor }