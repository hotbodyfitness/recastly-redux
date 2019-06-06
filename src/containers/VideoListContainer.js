import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
// import changeVideo from './../actions/currentVideo.js';
import changeVideoList from './../actions/videoList.js';


var VideoListContainer = () => {
  // figure out videos that we need to pass to videoList presentation component
  // define fn that filters state.videos
  var mapStateToProps = (state) => (
    {
      videos: unknownFunction(state.videos, state.changeVideo)
    }
  );
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
