import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleSearchChange = (q) => {

  return (dispatch, getState) => {
    searchYouTube({ 'key': YOUTUBE_API_KEY, 'query': q },
      (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      });

  };
};

export default handleSearchChange;
