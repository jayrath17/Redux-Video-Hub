import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = { songList: [], selectedVideo: null };

const nameReducer = (state = initialState, action) => {
  if (action.type === "add_new_Music") {
    return {
      ...state,
      songList: action.arr,
      selectedVideo: state.selectedVideo
    };
  }
  if (action.type === "videoClicked") {
    return {
      ...state,
      songList: state.songList,
      selectedVideo: action.videoDetail
    };
  }
  if (action.type === "videoSearched") {
    return {
      ...state,
      songList: state.songList,
      selectedVideo: null
    };
  }
  return state;
};

export default combineReducers({
  form: formReducer,
  nameReducer: nameReducer
});
