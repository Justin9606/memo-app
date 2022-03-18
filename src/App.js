import React from 'react';

import {Provider} from 'react-redux';
import store from './store';
import AppStack from './navigation';

//KeyBoarManager
import KeyboardManager from 'react-native-keyboard-manager';

const App = () => {
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setToolbarDoneBarButtonItemText('학인');
  }

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
