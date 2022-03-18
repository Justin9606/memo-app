import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import Lists from '../pages/Lists';
import Content from '../pages/Content';
import Create from '../pages/Create';
import {useSelector} from 'react-redux';

//header-back-btn
import HeaderBackBtn from '../components/common/HeaderBackBtn/HeaderBackBtn';

const Stack = createNativeStackNavigator();

const AppStack = props => {
  const memos = useSelector(state => state.memos);

  const setOptions = {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTitleStyle: {color: 'white', fontSize: 16, fontWeight: '600'},
    headerBackTitleVisible: false,
    contentStyle: {backgroundColor: '#fff'},
    headerLeft: () => <HeaderBackBtn />,
  };
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName="Lists"
        mode="animation"
        screenOptions={setOptions}>
        <Stack.Screen
          name="Lists"
          component={Lists}
          options={{
            headerTitle: `메모리스트 ${
              memos.memos.length > 0 ? `(${memos.memos.length})` : ''
            }`,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{
            headerTitle: `${memos.memo?.title}`,
          }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            headerTitle: '메모 작성',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
