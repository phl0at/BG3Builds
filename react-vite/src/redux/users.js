//! --------------------------------------------------------------------
//*                             Actions
//! --------------------------------------------------------------------

const GET_ALL_USERS = "users/getAll"
const ADD_USER = "users/add"

//! --------------------------------------------------------------------
//*                         Action Creators
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

export const thunkGetAllUsers = () => async (dispatch) => {
  try {
    const res = await fetch("/api/users");
    if (res.ok) {
      const data = await res.json();
      dispatch(action(GET_ALL_USERS, data.users));
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
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS: {
      const newState = { ...state };
      action.payload.forEach((user) => (newState[user.id] = user));
      return newState;
    }

    case ADD_USER: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState
    }

    default:
      return state;
  }
}

export default usersReducer;
