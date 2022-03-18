//react
import React, {useState} from 'react';
//react native
import {ScrollView} from 'react-native';
//from slicer
import * as memoActions from '../../store/slices/memos';
//redux
import {useDispatch} from 'react-redux';
//Random uuid
import {v4 as uuidv4} from 'uuid';
//moment for date
import moment from 'moment';

//containers
import Viewcontainer from '../../components/containers/ViewContainer';
import Spacer from '../../components/containers/Spacer';

//common
import Input from '../../components/common/TextInput/TextInput';
import LargeButton from '../../components/common/Buttons/LargeButton';

//texts
import Label from '../../components/common/Texts/LabelText';

const Create = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createMemoHander = async () => {
    if (title === '') {
      alert('제목을 입력해주세요');
    } else if (description === '') {
      alert('설명을 입력해주세요');
    } else {
      const obj = {
        id: uuidv4().toUpperCase(),
        title,
        description,
        createdAt: moment().format('YYYY-MM-DD'),
        updatedAt: moment().format('YYYY-MM-DD'),
      };
      dispatch(memoActions.createMemoActions(obj));
      props.navigation.navigate('Lists');
    }
  };

  return (
    <Viewcontainer marginHorizontal={20}>
      <ScrollView style={{flex: 1}}>
        <Spacer height={50} />
        <Label label={'제목'} />
        <Spacer height={16} />
        <Input
          onChangeText={title => setTitle(title)}
          placeholder={'제목을 입력해주세요'}
          fontSize={16}
          borderBottomWidth={1}
          multiline={true}
          paddingBottom={5}
          maxLength={20}
        />
        <Spacer height={50} />
        <Label label={'설명'} />
        <Spacer height={16} />

        <Input
          onChangeText={description => setDescription(description)}
          placeholder={'설명을 입력해주세요'}
          multiline={true}
          fontSize={14}
          borderBottomWidth={1}
          paddingBottom={5}
        />
      </ScrollView>
      <LargeButton title="추가" onPress={createMemoHander} />
    </Viewcontainer>
  );
};

export default Create;
