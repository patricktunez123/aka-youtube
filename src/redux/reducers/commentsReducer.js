import { commentActionTypes } from "../constraints/actionTypes";

const initialState = {
  loading: false,
  comments: null,
};

export const commentsReducer = (
  prevState = initialState,
  { type, payload }
) => {
  switch (type) {
    case commentActionTypes.COMMENT_LIST_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case commentActionTypes.COMMENT_LIST_SUCCESS:
      return {
        ...prevState,
        loading: false,
        comments: payload,
      };

    case commentActionTypes.COMMENT_LIST_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};
