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

const initialState = {
  data: [],
  refreshing: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case `${LIST}`: 
      if (action.skip == 0) return { ...state, refreshing: true };
      return { ...state };
    case `${LIST}_FAIL`: return { ...state, refreshing: false };
    case `${LIST}_SUCCESS`: 
      if (action.meta.previousAction.skip == 0) return { data: [...action.payload.data], refreshing: false};
      return { data: [...state.data, ...action.payload.data], refreshing: false};
    default: return {...state};
  }
}

// return action.payload.data.reduce((previous, current) => {
//   if(!previous.some(s => s.login == current.login)) 
//     previous.push(current);
//   return previous;
// }, state);  //reset state if skip == 0;

/* Dispatchers ---------------------------*/

let SKIP = 0;

export const list = (options = {}) => (dispatch, getState) => {
  SKIP = options.reload ? 0 : SKIP + 16; //multiple call will produced diferents SKIP
  return dispatch(Action.list(SKIP));
}