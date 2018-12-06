import {
	FETCH_INFO,
  SUBMIT_FORM,
} from "../actions/types";

const INITIAL_STATE = {
  usersInfo: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
      	...state,
      	usersInfo: action.payload.data.reverse()
      };
    case SUBMIT_FORM:
      return {
        ...state,
        usersInfo: [action.payload, ...state.usersInfo]
      };
    default:
      return state;
  }
}
