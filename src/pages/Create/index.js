import {TextInput, Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as memoActions from '../../store/slices/memos';
import {useDispatch} from 'react-redux';
//Random uuid
import {v4 as uuidv4} from 'uuid';
//moment for date
import moment from 'moment';

const Create = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createMemoHander = async () => {
    const obj = {
      id: uuidv4().toUpperCase(),
      title,
      description,
      createdAt: moment().format('YYYY-MM-DD'),
      updatedAt: moment().format('YYYY-MM-DD'),
    };
    dispatch(memoActions.createMemoActions(obj));
    props.navigation.navigate('Lists');
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        onChangeText={title => setTitle(title)}
        placeholder="Add title"
      />
      <TextInput
        onChangeText={description => setDescription(description)}
        placeholder="Add description"
      />
      <Button title="Submit" onPress={createMemoHander} />
    </View>
  );
};

export default Create;
