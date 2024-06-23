const loadStaticData = (payload) => {
  return {
    type: "preload",
    payload,
  };
};

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

const initialState = {};
function staticReducer(state = initialState, action) {
  switch (action.type) {
    case "preload": {
      const { origins, classes, races, backgrounds } = action.payload;
      const newState = { ...state };
      origins.forEach(
        (origin) =>
          (newState["origins"] = {
            ...newState["origins"],
            [origin.id]: origin,
          })
      );
      classes.forEach(
        (_class) =>
          (newState["classes"] = {
            ...newState["classes"],
            [_class.id]: _class,
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
      return newState;
    }
    default:
      return state;
  }
}

export default staticReducer;
