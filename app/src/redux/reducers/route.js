//Reducer of routes (AndroidToolbar) 

const DRAWER_TOGGLE = "DRAWER_TOGGLE";
const DRAWER_TO_CLOSE = "DRAWER_TO_CLOSE";
const DRAWER_TO_OPEN = "DRAWER_TO_OPEN";
const ROUTER_PAGE = "ROUTER_PAGE";

// Action Creators
export const Action = {
  toggle: () => ({ type: DRAWER_TOGGLE }),
  close: () => ({ type: DRAWER_TO_CLOSE }),
  open: () => ({ type: DRAWER_TO_OPEN }),
  page: (page) => ({ type: ROUTER_PAGE, page: page })
};

// Reducer
const initialState = {
    drawer: false,
    page: 0
};

export default (state = initialState, action) => {
  console.log('reducer was called with state', state, 'and action', action)
  switch(action.type) {
    case DRAWER_TOGGLE: return { ...state, drawer: !state.drawer };
    case DRAWER_TO_CLOSE: return { ...state, drawer: false };
    case DRAWER_TO_OPEN: return { ...state, drawer: true };
    case ROUTER_PAGE: return { ...state, page: action.page, drawer: false }; //set page and close drawer
    default: return state;
  }
}

export const toggleDrawer = () => dispatch => {  
  dispatch(Action.toggle());
}

export const setDrawerToClose = () => dispatch => {  
  dispatch(Action.close());
}
export const setDrawerToOpen = () => dispatch => {  
  dispatch(Action.open());
}

export const setRouterPage = (page) => dispatch => {  
  dispatch(Action.page(page));
}