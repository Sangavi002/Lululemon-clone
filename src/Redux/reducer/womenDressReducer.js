
import { FETCH_DRESS_REQUEST, FETCH_DRESS_SUCCESS, FETCH_DRESS_FAILURE, SORT_DRESS_ASC, SORT_DRESS_DESC } from "../action/womenDress";

export const womenDressReducer = (state = { isLoading: false, isError: false, dress: [] }, action) => {
  switch (action.type) {
    case FETCH_DRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_DRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dress: action.payload
      };
    case FETCH_DRESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case SORT_DRESS_ASC:
      return {
        ...state,
        dress: state.dress.slice().sort((a, b) => a.price - b.price)
      };
      console.log(state.dress)
    case SORT_DRESS_DESC:
      return {
        ...state,
        dress: state.dress.slice().sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
};
