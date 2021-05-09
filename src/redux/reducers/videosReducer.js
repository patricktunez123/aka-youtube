import { videoActionTypes } from "../constraints/actionTypes";

const videosReducer = (
  prevState = {
    videos: [],
    laoding: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case videoActionTypes.HOME_VIDEO_SUCCESS:
      return {
        ...prevState,
        videos: payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
        laoding: false,
      };

    case videoActionTypes.HOME_VIDEO_FAIL:
      return {
        ...prevState,
        laoding: false,
        error: payload,
      };

    case videoActionTypes.HOME_VIDEO_REQUEST:
      return {
        ...prevState,
        laoding: true,
      };

    default:
      return prevState;
  }
};

export default videosReducer;
