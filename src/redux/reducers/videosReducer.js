import {
  videoActionTypes,
  videoByIdActionTypes,
} from "../constraints/actionTypes";

export const videosReducer = (
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
        videos:
          prevState.activeCategory === payload.category
            ? [...prevState.videos, ...payload.videos]
            : payload.videos,
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

export const videoByIdReducer = (
  prevState = {
    laoding: false,
    video: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case videoByIdActionTypes.GET_VIDEO_BY_ID_REQUEST:
      return {
        ...prevState,
        laoding: true,
      };
    case videoByIdActionTypes.GET_VIDEO_BY_ID_SUCCESS:
      return {
        ...prevState,
        laoding: false,
        video: payload,
      };
    case videoByIdActionTypes.GET_VIDEO_BY_ID_FAIL:
      return {
        ...prevState,
        laoding: false,
        error: payload,
      };
    default:
      return prevState;
  }
};
