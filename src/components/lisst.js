import React from "react";
import { connect, useDispatch } from "react-redux";

const Lisst = (props) => {
  const dispatch = useDispatch();
  // styling for list item--------------------------------
  const styleObj = {
    textAlign: "left",
    cursor: "pointer"
  };
  // -------------------------------------------------

  console.log("props", props.arr);
  const arr = props.arr;
  const renderItems = arr.map((items) => {
    return (
      <div
        onClick={() => {
          console.log("cliccked", items);
          dispatch({ type: "videoClicked", videoDetail: items });
        }}
        key={items.id.videoId}
        class="item"
        style={styleObj}
      >
        <img
          class="ui middle aligned tiny image"
          alt={items.snippet.title}
          src={items.snippet.thumbnails.default.url}
        />

        <div class="content">
          <div class="header">{items.snippet.title}</div>
        </div>
        {/* <span>{items.snippet.title}</span> */}
      </div>
    );
  });
  return <div class="ui middle aligned divided list">{renderItems}</div>;
};

const mapStatestoProps = (state) => {
  console.log("mappp", state);
  return {
    arr: state.nameReducer.songList
  };
};

export default connect(mapStatestoProps)(Lisst);
