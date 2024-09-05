import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                             Actions
//! --------------------------------------------------------------------

const PRELOAD = "preload";
const GET_ITEM = "items/get";

//! --------------------------------------------------------------------
//*                         Action Creator
//! --------------------------------------------------------------------

const action = (type, payload) => {
  return {
    type,
    payload,
  };
};

//! --------------------------------------------------------------------
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkPreloadData = () => async (dispatch) => {
  try {
    const res = await fetch("/api/preload");
    if (res.ok) {
      const data = await res.json();
      dispatch(action("preload", data));
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

//! --------------------------------------------------------------------

export const thunkGetItems = (type) => async (dispatch) => {
  try {
    const res = await fetch(`/api/items/${type}`);
    if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_ITEM, { type, items: data }));
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

//! --------------------------------------------------------------------
//*                            Selectors
//! --------------------------------------------------------------------

export const getClassArray = createSelector(
  (state) => state.static.classes,
  (_class) => Object.values(_class)
);

//! --------------------------------------------------------------------

export const getRaceArray = createSelector(
  (state) => state.static.races,
  (race) => Object.values(race)
);

//! --------------------------------------------------------------------

export const getBackgroundArray = createSelector(
  (state) => state.static.backgrounds,
  (bg) => Object.values(bg)
);
//! --------------------------------------------------------------------

export const getOriginArray = createSelector(
  (state) => state.static.origins,
  (origin) => Object.values(origin)
);

//! --------------------------------------------------------------------
//*                            Reducer
//! --------------------------------------------------------------------

const initialState = {};
function staticReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM: {
      const newState = { ...state };
      action.payload.items.forEach(
        (item) =>
          (newState.items[action.payload.type] = {
            ...newState.items[action.payload.type],
            [item.id]: item,
          })
      );
      return newState;
    }
    case PRELOAD: {
      const { origins, classes, races, backgrounds, cantrips } = action.payload;
      const newState = {
        ...state,
        origins: {},
        classes: {},
        races: {},
        backgrounds: {},
        cantrips: {},
        items: {},
      };
      
      classes.forEach((_class) => (newState.classes[_class.class_id] = _class));

      races.forEach((race) => (newState.races[race.id] = race));

      backgrounds.forEach((bg) => (newState.backgrounds[bg.id] = bg));

      origins.forEach((origin) => (newState.origins[origin.id] = origin));

      cantrips.forEach((cantrip) => (newState.cantrips[cantrip.id] = cantrip));

      return newState;
    }
    default:
      return state;
  }
}

export default staticReducer;
