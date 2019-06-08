import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

var mapStateToProps = (state) => (
  { video: state.currentVideo }
);

var mapDispatchToProps = (dispatch) => (
    {changeCurrentVideo: currentVideo => dispatch(changeVideo(currentVideo))}
);

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
