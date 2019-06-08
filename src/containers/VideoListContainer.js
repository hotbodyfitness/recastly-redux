import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/videoList.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// mapStateToProps
var mapStateToProps = (state) => {
  return {
    videos: state.videoList
  }
};

// mapDispatchToProps
var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: video => {
      dispatch(changeVideo(video))
    }
  }
}

// connect
var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);


export default VideoListContainer;
