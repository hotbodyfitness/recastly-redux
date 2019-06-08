import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main';
import exampleVideoData from '../data/exampleVideoData';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var configureStore = createStore(rootReducer, {currentVideo: null, videoList:exampleVideoData}, applyMiddleware(thunk));

export default configureStore;
