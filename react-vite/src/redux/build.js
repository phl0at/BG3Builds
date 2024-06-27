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
const CLEAR_BONUS = "build/clearBonus";
const SET_DEFAULT_ABILITIES = "build/setAbilities";
const RAISE_ABILITY = "build/raiseAbility";
const LOWER_ABILITY = "build/lowerAbility";
const EQUIP_ITEM = "build/equip";

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

export const addBuildClass = (payload) => {
  return {
    type: ADD_BUILD_CLASS,
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

export const thunkCreateBuild = () => async (dispatch) => {};

//! --------------------------------------------------------------------
//*                            Selectors
//! --------------------------------------------------------------------

export const getBuildClassArray = createSelector(
  (state) => state.builds.current.buildClasses,
  (_class) => {
    let arr = [];
    for (const key in _class) {
      if (key > 0) {
        arr.push(_class[key]);
      }
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
    case SET_ORIGIN: {
      const newState = { ...state, current: { ...state.current } };
      newState.current.origin = action.payload;
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
          buildClasses: { ...state.current.buildClasses },
        },
      };
      delete newState.current.buildClasses["0"];
      newState.current.buildClasses[action.payload.id] = action.payload;
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
