import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import rootReducer from './reducers'; // Replace with your correct path to rootReducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;





// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
