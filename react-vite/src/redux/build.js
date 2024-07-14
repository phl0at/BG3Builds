import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_DEFAULTS = "build/setDefault";
const SET_CURRENT_BUILD = "build/setBuild";
const DELETE_BUILD = "build/delete";
const GET_BUILD = "build/getBuild";
const GET_ALL_BUILDS = "build/getAll";
const GET_ALL_USERS = "users/getAll";
const SET_ORIGIN = "build/setOrigin";
const SET_RACE = "build/setRace";
const SET_BG = "build/setBackground";
const SET_BONUS = "build/setBonus";
const SET_CLASS = "build/setClass";
const ADD_BUILD_CLASS = "build/addBuildClass";
const RESET_CLASSES = "build/resetClasses";
const CLEAR_BONUS = "build/clearBonus";
const RESET_ABILITIES = "build/resetAbilities";
const RAISE_ABILITY = "build/raiseAbility";
const LOWER_ABILITY = "build/lowerAbility";
const EQUIP_ITEM = "build/equip";
const COMMENT = "comment";
const DELETE_COMMENT = "comment/delete";

//! --------------------------------------------------------------------
//*                         Action Creators
//! --------------------------------------------------------------------

export const action = (type, payload) => ({
  type,
  payload,
});

//! --------------------------------------------------------------------

export const setCurrentBuild = (payload) => {
  return {
    type: SET_CURRENT_BUILD,
    payload,
  };
};
//! --------------------------------------------------------------------

export const setOrigin = (payload, name) => {
  return {
    type: SET_ORIGIN,
    payload,
    name,
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

export const addBuildClass = (payload) => {
  return {
    type: ADD_BUILD_CLASS,
    payload,
  };
};

//! --------------------------------------------------------------------

export const resetClasses = () => {
  return {
    type: RESET_CLASSES,
  };
};
//! --------------------------------------------------------------------

export const resetAbilities = () => {
  return {
    type: RESET_ABILITIES,
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

export const setDefaults = () => {
  return {
    type: SET_DEFAULTS,
  };
};

//! --------------------------------------------------------------------

export const raiseAbility = (payload) => {
  return {
    type: RAISE_ABILITY,
    payload,
  };
};

//! --------------------------------------------------------------------

export const lowerAbility = (payload) => {
  return {
    type: LOWER_ABILITY,
    payload,
  };
};

//! --------------------------------------------------------------------

export const setBonus = (amount, payload) => {
  return {
    type: SET_BONUS,
    amount,
    payload,
  };
};

//! --------------------------------------------------------------------

export const clearBonus = (amount, payload) => {
  return {
    type: CLEAR_BONUS,
    amount,
    payload,
  };
};

//! --------------------------------------------------------------------

export const equipItem = (itemType, payload) => {
  return {
    type: EQUIP_ITEM,
    itemType,
    payload,
  };
};

//! --------------------------------------------------------------------
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkCreateBuild =
  (build, { name, character_name }) =>
  async (dispatch) => {
    build.name = name;
    build.character_name = character_name;
    build.build_classes = Object.values(build.build_classes)
    const res = await fetch("/api/builds/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(build),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_BUILD, data));
      return data;
    } else if (res.status < 500) {
      const errorMessages = await res.json();
      return errorMessages;
    } else {
      return { server: "Something went wrong. Please try again" };
    }
  };

//! --------------------------------------------------------------------

export const thunkUpdateBuild =
  (build, { name, character_name }) =>
  async (dispatch) => {
    build.name = name;
    build.character_name = character_name;
    build.build_classes = Object.values(build.build_classes)
    
    const res = await fetch(`/api/builds/${build.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(build),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_BUILD, data));
      return data;
    } else if (res.status < 500) {
      const errorMessages = await res.json();
      return errorMessages;
    } else {
      return { server: "Something went wrong. Please try again" };
    }
  };

//! --------------------------------------------------------------------

export const thunkGetBuild = (buildId) => async (dispatch) => {
  const res = await fetch(`/api/builds/${buildId}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(action(GET_BUILD, data));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkGetAllBuilds = () => async (dispatch) => {
  const res = await fetch(`/api/builds`);
  if (res.ok) {
    const data = await res.json();
    dispatch(action(GET_ALL_BUILDS, data.builds));
    dispatch(action(GET_ALL_USERS, data.users));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};
//! --------------------------------------------------------------------

export const thunkDeleteBuild = (buildId) => async (dispatch) => {
  const res = await fetch(`/api/builds/${buildId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(DELETE_BUILD, buildId));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkCreateComment = (buildId, message) => async (dispatch) => {
  const res = await fetch(`/api/comments/${buildId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(COMMENT, data));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkEditComment = (message) => async (dispatch) => {
  const res = await fetch(`/api/comments/${message.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(COMMENT, data));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkDeleteComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(DELETE_COMMENT, id));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------
//*                            Selectors
//! --------------------------------------------------------------------

export const getEquipmentArray = createSelector(
  (state) => state.static.equipment,
  (item) => Object.values(item)
);

//! --------------------------------------------------------------------

export const getBuildClassArray = createSelector(
  (state) => state.builds.current.build_classes,
  (_class) => Object.values(_class)
);

//! --------------------------------------------------------------------

export const getCommentsArray = createSelector(
  (state) => state.builds.current.comments,
  (comment) => Object.values(comment)
);

//! --------------------------------------------------------------------
export const getBuildsArray = createSelector(
  (state) => state.builds,
  (build) => {
    const arr = [];
    for (const key in build) {
      if (key != "current") arr.push(build[key]);
    }
    return arr;
  }
);

//! --------------------------------------------------------------------
//*                            Reducer
//! --------------------------------------------------------------------

const initialState = {};
function buildReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_BUILD: {
      const newState = { ...state };
      newState.current = action.payload;
      return newState;
    }

    case GET_BUILD: {
      const newState = { ...state };

      newState[action.payload.id] = action.payload;
      newState.current = action.payload;

      //Normalize classes
      const build_classes = {};
      newState.current.build_classes.forEach(
        (_class) => (build_classes[_class.class_id] = _class)
      );
      newState.current.build_classes = { ...build_classes };

      //Normalize comments
      const comments = {};
      newState.current.comments.forEach(
        (comment) => (comments[comment.id] = comment)
      );
      newState.current.comments = { ...comments };

      return newState;
    }

    case GET_ALL_BUILDS: {
      const newState = { ...state };
      action.payload.forEach((build) => (newState[build.id] = build));
      return newState;
    }

    case DELETE_BUILD: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }

    case COMMENT: {
      const newState = { ...state };
      newState.current.comments = {
        ...newState.current.comments,
        [action.payload.id]: action.payload,
      };
      return newState;
    }

    case DELETE_COMMENT: {
      const newState = {
        ...state,
        current: { ...state.current, comments: { ...state.current.comments } },
      };
      delete newState.current.comments[action.payload];
      return newState;
    }

    case SET_ORIGIN: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.origin = action.payload;
      action.payload != 8
        ? (newState.current.character_name = action.name)
        : (newState.current.character_name = "Tav");
      return newState;
    }

    case SET_RACE: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.race = action.payload;
      return newState;
    }

    case SET_CLASS: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.class = action.payload;
      return newState;
    }

    case ADD_BUILD_CLASS: {
      const newState = {
        ...state,
        current: {
          ...state.current,
          build_classes: { ...state.current.build_classes },
        },
      };

      if (newState.current.build_classes[action.payload.class_id]) {
        //If the build has this class, simply increment the level
        newState.current.build_classes[action.payload.class_id].level++;
      } else {
        //Otherwise, set the class level to 1 and add it to the build
        action.payload.level = 1;
        newState.current.build_classes[action.payload.class_id] =
          action.payload;
      }
      newState.current.level++;
      return newState;
    }

    case RESET_CLASSES: {
      const newState = { ...state };
      newState.current.level = 0;
      newState.current.build_classes = {};
      return newState;
    }

    case SET_BG: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.background = action.payload;
      return newState;
    }

    case RESET_ABILITIES: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.strength = 8;
      newState.current.dexterity = 8;
      newState.current.constitution = 8;
      newState.current.intelligence = 8;
      newState.current.wisdom = 8;
      newState.current.charisma = 8;
      newState.current.plus_1 = "";
      newState.current.plus_2 = "";
      return newState;
    }

    case RAISE_ABILITY: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[action.payload]++;
      return newState;
    }

    case LOWER_ABILITY: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[action.payload]--;
      return newState;
    }

    case SET_BONUS: {
      const newState = { ...state, current: { ...state.current } };
      const existingBonus = newState.current[action.amount];
      const bonusAmount = Number(action.amount.split("_")[1]);

      if (existingBonus) {
        newState.current[existingBonus] -= bonusAmount;
      }
      newState.current[action.amount] = action.payload;
      newState.current[action.payload] += bonusAmount;

      return newState;
    }

    case CLEAR_BONUS: {
      const newState = { ...state, current: { ...state.current } };
      const bonusAmount = Number(action.amount.split("_")[1]);
      newState.current[action.amount] = "";
      newState.current[action.payload] -= bonusAmount;
      return newState;
    }

    case EQUIP_ITEM: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[action.itemType] = action.payload;
      return newState;
    }

    case SET_DEFAULTS: {
      const newState = {
        ...state,
        current: {
          character_name: "Tav",
          origin: 8,
          race: 1,
          background: 1,
          strength: 8,
          dexterity: 8,
          constitution: 8,
          intelligence: 8,
          wisdom: 8,
          charisma: 8,
          plus_1: "",
          plus_2: "",
          level: 0,
          build_classes: [],
        },
      };
      return newState;
    }

    default:
      return state;
  }
}

export default buildReducer;
