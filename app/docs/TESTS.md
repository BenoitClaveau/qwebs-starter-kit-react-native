# Jest

## Installation

```shell
npm install --save-dev jest react-test-renderer jest-cli babel-jest babel-preset-react-native
```

```.babelrc
{
  "presets": ["react-native"],
  "retainLines": true
}
```

```packages.json
"jest": {
    "preset": "react-native",
    "transformIgnorePatterns": [
        "/node_modules/(?!native-base)/"
    ]
}
```

```launch.json
{
    // Utilisez IntelliSense pour découvrir les attributs de débogage Node.js possibles.
    // Pointez pour afficher la description des attributs existants.
    // Pour plus d'informations, visitez : https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Tests",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/jest-cli/bin/jest.js",
            "cwd": "${workspaceRoot}",
            "runtimeArgs": [
                "--nolazy"
            ]
        }
    ]
}
```

# Mock API call

## Mock axios (axios middleware)

1. export axios client in store.js

```store.js
export const axiosClient = axios.create({
  baseURL: config.api.url,
  responseType: 'json'
});
```

2. import store and axiosclient in the unit tests

```test.js
import store, { axiosClient } from '../src/redux/store';
```

3. mock axiosClient

```test.js
const mock = new MockAdapter(axiosClient);
```

4. define expected result

5. full test

```test.js
mock.onPost('/user/connect').reply(200, { token: 12345 });
```

```test.js
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';
import Login from '../src/pages/login';
import { authenticate, Action } from '../src/redux/reducers/user';
import store, { axiosClient } from '../src/redux/store';

const mock = new MockAdapter(axiosClient); //mock aciosClient

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
```

# Mock store

Usefull to manage all state

1. import mockStore from 'redux-mock-store';

2. create the folder __mocks__

3. create the file redux-mock-store.js

4. import mockStore from 'redux-mock-store' in unit test

5. const store = mockStore() to get it

6. store.getActions

# Test component

## Installation

```shell
npm install --save-dev enzyme
npm install --save-dev react-addons-test-utils react-dom
```

exemple (https://github.com/lelandrichardson/enzyme-example-react-native)[https://github.com/lelandrichardson/enzyme-example-react-native]

## Testing

```test.js
import {shallow} from 'enzyme';
```

```test.js
import {shallow} from 'enzyme';
```