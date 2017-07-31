/* Constantes ---------------------------*/

const LIST = "API_USERS_LIST";

/* Actions ---------------------------*/

export const Action = {
  list: (skip = 0) => ({
    type: LIST,
    skip: skip, //save skip in action
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
      if (action.meta.previousAction.skip == 0) return [...action.payload.data];
      return [...state, ...action.payload.data];
      // return action.payload.data.reduce((previous, current) => {
      //   if(!previous.some(s => s.login == current.login)) 
      //     previous.push(current);
      //   return previous;
      // }, state);  //reset state if skip == 0;
    default: return [...state];
  }
}

/* Dispatchers ---------------------------*/

let SKIP = 0;

export const list = (options = {}) => (dispatch, getState) => {
  SKIP = options.reload ? 0 : SKIP + 16; //multiple call will produced diferents SKIP
  return dispatch(Action.list(SKIP));
}