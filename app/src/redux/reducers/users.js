import axios from 'axios';
import FormData from 'form-data';
import { Actions } from 'react-native-router-flux';

// Constants
const CREATE_USER = 'CREATE_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
const createUser = user => ({ type: CREATE_USER, user });
const login = user => ({ type: LOGIN, user });
const logout = () => ({ type: LOGOUT });

// Reducer
export default (user = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case LOGIN:
      return action.user;
    case LOGOUT:
      return {};
    default:
      return user;
  }
}

// Helper Function
const formatUser = data => ({
  name: data.object.metadata.name,
  username: data.object.metadata.username,
  profilePicture: data.object.metadata.profile_picture,
  id: data.object._id,
  slug: data.object.slug,
})

// Dispatcher
export const addUser = user => dispatch => {
  let data = new FormData();
  data.append('media', {
        uri: user.image,
        type: 'image/jpeg',
        name: 'image'
      });

  return Promise.resolve()
      .then(formattedUser => dispatch(createUser(formattedUser)))
      .then(() => Actions.feed())
      .catch(err => console.error(`Creating user unsuccessful`, err))
}

export const authenticate = user => dispatch => {
  return axios.post(`https://localhost:3000/`)
    .then(res => res.data)
    .then(data => {
      console.log('RESPONSE: ', data);
      if (data.objects) {
        const userData = data.objects[0];
        return {
          password: userData.metadata.password,
          username: userData.metadata.username,
          name: userData.metadata.name,
          profilePicture: userData.metadata.profile_picture,
          slug: userData.slug,
          id: userData._id,
        }
      } else {
        return 'Username invalid';
      }
    })
    .then(data => {
      if (data === 'Username invalid'){
        return data;
      } else if (data.password === user.password){
        dispatch(login({
          name: data.name,
          username: data.username,
          profilePicture: data.profilePicture,
          slug: data.slug,
          id: data.id,
        }))
      } else {
        return 'Password invalid';
      }
    })
    .catch(error => console.error('Login unsuccessful', error))
}

export const logoutUser = () => dispatch => {
  dispatch(logout());
  Actions.welcome();
}
