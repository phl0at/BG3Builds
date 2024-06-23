import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_ORIGIN = "build/setOrigin";
const SET_RACE = "build/setRace";
const SET_CLASS = "build/setClass";
const ADD_CLASS = "build/addClass";
const GET_ALL_CLASSES = "buld/getAllClasses";

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
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkCreateBuild = () => async (dispatch) => {};

//! --------------------------------------------------------------------
export const thunkGetAllClasses = () => async (dispatch) => {
  try {
    const res = await fetch("/api/builds/classes");
    if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_ALL_CLASSES, data));
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

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
      const newState = { ...state, current: { ...state.current } };
      const selectedClass = newState.classes[action.payload];
      newState.current["class"] = selectedClass;
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