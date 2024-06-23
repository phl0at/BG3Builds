import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_ORIGIN = "build/setOrigin";
const SET_RACE = "build/setRace";
const SET_CLASS = "build/setClass";
const SET_BG = "build/setBackground";
const ADD_CLASS = "build/addClass";
const GET_ALL_CLASSES = "build/getAllClasses";

//! --------------------------------------------------------------------
//*                         Action Creators
//! --------------------------------------------------------------------

const action = (type, payload) => ({
  type,
  payload,
});

//! --------------------------------------------------------------------

export const setOrigin = (payload) => {
  return {
    type: SET_ORIGIN,
    payload,
  };
};
//! --------------------------------------------------------------------

export const setRace = (payload) => {
  return {
    type: SET_RACE,
    payload,
  };
};

//! --------------------------------------------------------------------
export const setClass = (payload) => {
  return {
    type: SET_CLASS,
    payload,
  };
};

//! --------------------------------------------------------------------
export const setBackground = (payload) => {
  return {
    type: SET_BG,
    payload,
  };
};

//! --------------------------------------------------------------------
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkCreateBuild = () => async (dispatch) => {};

//! --------------------------------------------------------------------
//*                            Reducer
//! --------------------------------------------------------------------

const initialState = {};
function buildReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORIGIN:
      return {
        ...state,
        current: { ...state.current, origin: action.payload },
      };
    case SET_RACE:
      return { ...state, current: { ...state.current, race: action.payload } };
    case SET_CLASS: {
      const newState = {
        ...state,
        current: { ...state.current, class: action.payload },
      };
      return newState;
    }
    case SET_BG: {
      const newState = {
        ...state,
        current: { ...state.current, background: action.payload },
      };
      return newState;
    }
    case ADD_CLASS: {
      const newState = {
        ...state,
        current: {
          ...state.current,
          classList: { ...state.current.classList },
        },
      };
      return newState;
    }
    case GET_ALL_CLASSES: {
      const newState = { ...state, classes: {} };
      action.payload.forEach(
        (_class) => (newState.classes[_class.id] = _class)
      );
      return newState;
    }
    default:
      return state;
  }
}

export default buildReducer;
