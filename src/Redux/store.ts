// #region Global Imports
import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// #endregion Global Imports
import rootSaga from '../Sagas/index';

// #region Local Imports
import Reducers from "./Reducers";
// #endregion Local Imports

const sagaMiddleware = createSagaMiddleware();

export const makeStore = (initialState: {}) => {
    const store = createStore(
        Reducers,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga)

    return store;
};
