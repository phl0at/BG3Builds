//! --------------------------------------------------------------------
//*                          Action Types
//! --------------------------------------------------------------------

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const ADD_FAVORITE = "favorite/add";
const DELETE_FAVORITE = "favorite/delete";

//! --------------------------------------------------------------------
//*                         Action Creator
//! --------------------------------------------------------------------

const action = (type, payload) => ({
  type,
  payload,
});

//! --------------------------------------------------------------------
//*                             Thunks
//! --------------------------------------------------------------------

export const thunkAuthenticate = () => async (dispatch) => {
  const res = await fetch("/api/auth/");
  if (res.ok) {
    const data = await res.json();
    if (data.errors) {
      return;
    }
    dispatch(action(SET_USER, data));
  }
};

//! --------------------------------------------------------------------

export const thunkLogin = (credentials) => async (dispatch) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(action(SET_USER, data));
    return true
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkSignup = (user) => async (dispatch) => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(action(SET_USER, data));
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkLogout = () => async (dispatch) => {
  const loggedOut = await fetch("/api/auth/logout");
  if (loggedOut.ok) {
    dispatch(action(REMOVE_USER));
    return true
  }
};

//! --------------------------------------------------------------------

export const thunkAddFavorite = (buildId) => async (dispatch) => {
  const res = await fetch(`/api/favorites/${buildId}`, {
    method: "POST",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(ADD_FAVORITE, data));
    return data;
  } else if (res.status < 500) {
    const errorMessages = await res.json();
    return errorMessages;
  } else {
    return { server: "Something went wrong. Please try again" };
  }
};

//! --------------------------------------------------------------------

export const thunkDeleteFavorite = (buildId) => async (dispatch) => {
  const res = await fetch(`/api/favorites/${buildId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(action(DELETE_FAVORITE, buildId));
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

const initialState = { user: null };
function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const newState = { ...state, user: action.payload };

      // Normalize favorites
      const favorites = {};
      newState.user.favorites.forEach(
        (favorite) => (favorites[favorite.build_id] = favorite)
      );
      newState.user.favorites = { ...favorites };
      return newState;
    }

    case REMOVE_USER: {
      return { ...state, user: null };
    }

    case ADD_FAVORITE: {
      const newState = {
        ...state,
        user: { ...state.user, favorites: { ...state.user.favorites } },
      };
      newState.user.favorites[action.payload.build_id] = action.payload;
      return newState;
    }

    case DELETE_FAVORITE: {
      const newState = {
        ...state,
        user: { ...state.user, favorites: { ...state.user.favorites } },
      };
      delete newState.user.favorites[action.payload];
      return newState;
    }

    default:
      return state;
  }
}

export default sessionReducer;
