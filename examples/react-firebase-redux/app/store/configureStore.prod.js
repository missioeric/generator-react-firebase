import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { reduxReactFirebase } from 'redux-firebasev3'
import { firebase as fbConfig } from '../config'

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
<<<<<<< HEAD
    reduxReactFirebase(fbConfig),
=======
    reduxReactFirebase(fbConfig, { userProfile: fbConfig.userFolder }),
>>>>>>> origin/redux-firebasev3
    applyMiddleware(thunk)
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
