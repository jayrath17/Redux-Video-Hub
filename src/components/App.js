import "../styles.css";
import React from "react";
import { connect, useDispatch } from "react-redux";

import Form from "./form";
import youtube from "../api/youtube";
import VideoPlay from "./videoPlayer";
import Lisst from ".//lisst";

const App = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const response = await youtube.get("./search", {
      params: { q: e.SearchSong }
    });

    console.log(response.data.items);
    dispatch({ type: "add_new_Music", arr: response.data.items });
    dispatch({ type: "videoSearched" });
  };
  const logo = [
    "https://www.imore.com/sites/imore.com/files/styles/large/public/topic_images/2016/el-capitan-topic-logo.png?itok=k3U4WM7J",
    "http://icons.iconarchive.com/icons/gordon-irving/x-set/512/X-Circle-Blu-icon.png"
  ];
  return (
    <div class="ui container">
      <div class="ui list">
        <h1 class="ui header">
          <img alt="logo" class="ui image" src={logo[1]} />
          <div class="content">REDUX-VIDEO-HUB</div>
        </h1>
        <h3>Enjoy the videos and music you love on Redux-Video</h3>
      </div>
      <Form onSubmit={handleSubmit} />
      <div class="ui grid">
        <div class="ui row">
          <div class="nine wide column">
            <VideoPlay />
          </div>
          <div class="seven wide column">
            <Lisst />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.nameReducer.selectedVideo
  };
};
export default connect(mapStateToProps)(App);
