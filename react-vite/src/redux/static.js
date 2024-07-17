import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                         Action Creators
//! --------------------------------------------------------------------

const loadStaticData = (payload) => {
  return {
    type: "preload",
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
      dispatch(loadStaticData(data));
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
    case "preload": {
      const { origins, classes, races, backgrounds, equipment } =
        action.payload;
      const newState = { ...state };
      classes.forEach(
        (_class) =>
          (newState["classes"] = {
            ...newState["classes"],
            [_class.class_id]: _class,
          })
      );
      races.forEach(
        (race) =>
          (newState["races"] = { ...newState["races"], [race.id]: race })
      );
      backgrounds.forEach(
        (background) =>
          (newState["backgrounds"] = {
            ...newState["backgrounds"],
            [background.id]: background,
          })
      );
      equipment.forEach(
        (item) =>
          (newState["equipment"] = {
            ...newState["equipment"],
            [item.id]: item,
          })
      );
      origins.forEach(
        (origin) =>
          (newState["origins"] = {
            ...newState["origins"],
            [origin.id]: origin,
          })
      );
      return newState;
    }
    default:
      return state;
  }
}

export default staticReducer;
