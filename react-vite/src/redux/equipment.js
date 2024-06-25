import { createSelector } from "reselect";

//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const GET_EQUIPMENT = "equipment/get";

//! --------------------------------------------------------------------
//*                         Action Creators
//! --------------------------------------------------------------------

const action = (type, payload) => ({
  type,
  payload,
});


//! --------------------------------------------------------------------
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkGetEquipment = (type) => async (dispatch) => {
  const res = await fetch(`/api/equipment/${type}`);
  if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_EQUIPMENT, data));
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
    (state) => state.equipment,
    (item) => Object.values(item)
  );

//! --------------------------------------------------------------------
//*                            Reducer
//! --------------------------------------------------------------------

const initialState = {};
function equipmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EQUIPMENT: {
      const newState = { ...state };
      action.payload.forEach((item) => (newState[item.id] = item));
      return newState;
    }
    default:
      return state;
  }
}

export default equipmentReducer;
