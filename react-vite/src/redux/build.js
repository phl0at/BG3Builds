import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_ORIGIN = "build/setOrigin";
const SET_RACE = "build/setRace";
const SET_BG = "build/setBackground";
const SET_BONUS = "build/setBonus";
const SET_CLASS = "build/setClass";
const ADD_BUILD_CLASS = "build/addBuildClass";
const RESET_CLASSES = "build/clearClasses";
const CLEAR_BONUS = "build/clearBonus";
const SET_DEFAULT_ABILITIES = "build/setAbilities";
const RAISE_ABILITY = "build/raiseAbility";
const LOWER_ABILITY = "build/lowerAbility";
const EQUIP_ITEM = "build/equip";
const CREATE_BUILD = "build/create";

//! --------------------------------------------------------------------
//*                         Action Creators
//! --------------------------------------------------------------------

const action = (type, payload) => ({
  type,
  payload,
});

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
    type: SET_DEFAULT_ABILITIES,
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

export const clearBonus = (payload) => {
  return {
    type: CLEAR_BONUS,
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

export const thunkCreateBuild = (build) => async (dispatch) => {
  const res = await fetch("/api/builds", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(build),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(CREATE_BUILD, data));
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
      if (newState.current.build_classes) {
        newState.current.level++;
        const existingClass = newState.current.build_classes.find(
          (build_class) => build_class.id == action.payload.id
        );
        if (existingClass) {
          newState.current.build_classes[
            newState.current.build_classes.indexOf(existingClass)
          ].level++;

          newState.current.build_classes[
            newState.current.build_classes.indexOf(existingClass)
          ].sub_class = action.payload.sub_class;
        } else {
          action.payload.level = 1;
          newState.current.build_classes.push(action.payload);
        }
      } else {
        newState.current.level = 1;
        action.payload.level = 1;
        newState.current.build_classes = [action.payload];
      }
      return newState;
    }

    case RESET_CLASSES: {
      const newState = { ...state };
      delete state.current.build_classes;
      delete state.current.level;
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
      newState.current[action.amount] = action.payload;
      return newState;
    }

    case CLEAR_BONUS: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[action.payload] = "";
      return newState;
    }

    case EQUIP_ITEM: {
      const newState = { ...state, current: { ...state.current } };
      newState.current[action.itemType] = action.payload;
      return newState;
    }

    case SET_DEFAULT_ABILITIES: {
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
        },
      };
      return newState;
    }

    default:
      return state;
  }
}

export default buildReducer;
