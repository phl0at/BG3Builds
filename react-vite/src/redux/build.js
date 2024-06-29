import { createSelector } from "reselect";
import { parseEquipment } from "./helper";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_DEFAULTS = "build/setDefault";
const SET_CURRENT_BUILD = "build/setBuild";
const GET_BUILD = "build/getBuild";
const SET_ORIGIN = "build/setOrigin";
const SET_RACE = "build/setRace";
const SET_BG = "build/setBackground";
const SET_BONUS = "build/setBonus";
const SET_CLASS = "build/setClass";
const ADD_BUILD_CLASS = "build/addBuildClass";
const RESET_CLASSES = "build/resetClasses";
const CLEAR_BONUS = "build/clearBonus";
const RAISE_ABILITY = "build/raiseAbility";
const LOWER_ABILITY = "build/lowerAbility";
const EQUIP_ITEM = "build/equip";

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

export const setBackground = (payload) => {
  return {
    type: SET_BG,
    payload,
  };
};

//! --------------------------------------------------------------------

export const setAbilities = () => {
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
  (equipment, build, { name, character_name }) =>
  async (dispatch) => {
    build.name = name;
    build.character_name = character_name;
    console.log(build)
    const res = await fetch("/api/builds/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(build),
    });

    if (res.ok) {
      const data = await res.json();
      const formatted = parseEquipment(equipment, data);
      dispatch(action(GET_BUILD, formatted));
      return formatted;
    } else if (res.status < 500) {
      const errorMessages = await res.json();
      return errorMessages;
    } else {
      return { server: "Something went wrong. Please try again" };
    }
  };

//! --------------------------------------------------------------------

export const thunkUpdateBuild =
  (equipment, build, { name, character_name }) =>
  async (dispatch) => {
    build.name = name;
    build.character_name = character_name;

    const res = await fetch(`/api/builds/${build.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(build),
    });

    if (res.ok) {
      const data = await res.json();
      const formatted = parseEquipment(equipment, data);
      dispatch(action(GET_BUILD, formatted));
      return data;
    } else if (res.status < 500) {
      const errorMessages = await res.json();
      return errorMessages;
    } else {
      return { server: "Something went wrong. Please try again" };
    }
  };

//! --------------------------------------------------------------------

export const thunkGetBuild = (equipment, buildId) => async (dispatch) => {
  const res = await fetch(`/api/builds/${buildId}`);
  if (res.ok) {
    const data = await res.json();
    const formatted = parseEquipment(equipment, data);
    console.log(data)
    dispatch(action(GET_BUILD, formatted));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

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
        },
      };
      const existingClass = newState.current.build_classes.find(
        (build_class) => build_class.class_id === action.payload.class_id
      );
      if (existingClass) {
        newState.current.build_classes[
          newState.current.build_classes.indexOf(existingClass)
        ].level += 1;

        newState.current.build_classes[
          newState.current.build_classes.indexOf(existingClass)
        ].sub_class = action.payload.sub_class;
      } else {
        action.payload.level = 1;
        newState.current.build_classes.push(action.payload);
      }
      newState.current.level++;
      return newState;
    }

    case RESET_CLASSES: {
      const newState = { ...state };
      newState.current.level = 0;
      newState.current.build_classes = [];
      return newState;
    }

    case SET_BG: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.background = action.payload;
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
          ...state.current,
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
