import React from "react";
import { connect } from "react-redux";

const VideoPlayer = (props) => {
  const videoDetail = props.videoDetail;
  if (videoDetail === null) {
    return (
      <div>
        <img
          alt="music &videos"
          class="ui fluid image"
          src="https://wallpapershome.com/images/pages/pic_v/19771.jpg"
        />
      </div>
    );
  }
  let renderVideo = null;
  let renderDescription = null;
  let videoId = null;
  let videoSrc = null;
  if (videoDetail) {
    console.log(videoDetail);
    console.log(videoDetail.snippet.title);
    console.log(videoDetail.snippet.description);
    console.log(videoDetail.id.videoId);
    renderVideo = videoDetail.snippet.title;
    renderDescription = videoDetail.snippet.description;
    videoId = videoDetail.id.videoId;
    videoSrc = `https://www.youtube.com/embed/${videoId}`;
  }
  return (
    <div>
      <div class="ui embed">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>

      <div class="ui segment">
        <h4 class="ui header">{renderVideo}</h4>
        <p>{renderDescription}</p>
      </div>
    </div>
  );
};
const mapStatestoprops = (state) => {
  return {
    videoDetail: state.nameReducer.selectedVideo
  };
};
export default connect(mapStatestoprops)(VideoPlayer);
