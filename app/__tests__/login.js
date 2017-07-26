import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import Login, { Page } from '../src/pages/login';
import { authenticate, Action } from '../src/redux/reducers/user';
import store, { axiosClient } from '../src/redux/store';
import {shallow } from 'enzyme';
import { Button } from "native-base";

const mock = new MockAdapter(axiosClient); //mock aciosClient

const initialState = { };
const store2 = mockStore(initialState);

afterEach(() => {
  mock.reset();
});

afterAll(() => {
  mock.restore();
});

test('Mock axios', done => {
  mock.onPost('/user/connect').reply(200, { token: 12345 });

  return store.dispatch(Action.authenticate()).then(() => {
    expect(store.getState().user).toMatchObject({ token: 12345 })
  }).then(done).catch(done.fail);
}, 20000);

// test('Test component with redux store', () => {
//   const tree = renderer.create(
//     <Provider store={store}>
//       <Login />
//     </Provider>
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('Test component without redux store', done => {

//   const wrapper = shallow(
//       <Login />,
//       { context: { store: store } },
//     );
  
//   //let wrapper = shallow(<Provider store={store}><Login /></Provider>);
//   let button =  wrapper.find("Button").first();
//   button.simulate('press');

//   let state = store.getState();
//   done();
// });
