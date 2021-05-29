import {
  videoActionTypes,
  videoByIdActionTypes,
  relatedVideosActionTypes,
  searchVideosActionTypes,
  subscribeVideosActionTypes,
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

export const relatedVideosReducer = (
  prevState = {
    loading: false,
    error: "",
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case relatedVideosActionTypes.RELATED_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case relatedVideosActionTypes.RELATED_VIDEOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case relatedVideosActionTypes.RELATED_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};

export const searchVideosReducer = (
  prevState = {
    loading: false,
    error: "",
    videos: [],
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case searchVideosActionTypes.SEARCH_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case searchVideosActionTypes.SEARCH_VIDEOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case searchVideosActionTypes.SEARCH_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};

export const subscriptionsVideosReducer = (
  prevState = {
    loading: false,
    error: null,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };

    case subscribeVideosActionTypes.SUBSCRIBE_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};
