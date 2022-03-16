import React from 'react';

import {Provider} from 'react-redux';
import store from './store';
import AppStack from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
