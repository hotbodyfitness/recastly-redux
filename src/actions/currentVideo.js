var changeVideo = (video) => {
  // console.log(video);
  return ({ type: 'CHANGE_VIDEO',
           video: video
         });
};

export default changeVideo;
