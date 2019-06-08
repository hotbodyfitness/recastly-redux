import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import { Provider } from 'react-redux';
import configureStore from './store/store';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

var newStore = configureStore();

ReactDOM.render(
  <Provider store={newStore}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  </Provider>,
  document.getElementById('app')
);

