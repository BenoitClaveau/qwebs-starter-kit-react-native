/* Constantes ---------------------------*/

const LIST = "API_USERS_LIST";

/* Actions ---------------------------*/

export const Action = {
  list: (skip = 0) => ({
    type: LIST,
    payload: {
      client: "api",  //define axios client to use (store.js)
      request:{
        url: `users?skip=${skip}`,
        method: 'GET'
      }
    }
  })
}

/* Reducer ---------------------------*/

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case `${LIST}_SUCCESS`: 
      state.items = action.skip == 0 ? [] : state.items;
      return [...state.items, action.payload.data]; 
    default: return [...state];
  }
}

/* Dispatchers ---------------------------*/

export const list = (skip) => (dispatch, getState) => {
  return dispatch(Action.list(skip));
}