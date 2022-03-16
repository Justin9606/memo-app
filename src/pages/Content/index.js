import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import * as memoActions from '../../store/slices/memos';
import {useDispatch, useSelector} from 'react-redux';

//moment for date
import moment from 'moment';

//styled components
import styled from 'styled-components';

//common
import SmallTextBtn from '../../components/common/Buttons/SmallTextBtn';

//containers
import Viewcontainer from '../../components/containers/ViewContainer';
import Spacer from '../../components/containers/Spacer';
import AbsoluteView from '../../components/containers/AbsoluteView';
import Row from '../../components/containers/Row';

//Texts
import TitleText from '../../components/common/Texts/TitleText';
import ContentText from '../../components/common/Texts/ContentText';
import DateText from '../../components/common/Texts/DateText';

const Contents = props => {
  const dispatch = useDispatch();
  const content = useSelector(state => state.memos.memo);

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(content.title);
  const [description, setdescription] = useState(content.description);
  const [updatedAt, setUpdatedAt] = useState(content.updatedAt);

  const openEditForm = () => {
    setEdit(true);
  };

  const editSubmit = id => {
    const obj = {
      id,
      title,
      description,
      createdAt: content.createdAt,
      updatedAt: moment().format('YYYY-MM-DD'),
    };
    dispatch(memoActions.editMemoAction(id, obj));
    dispatch(memoActions.getMemosAction());
    dispatch(memoActions.getSingleData({}));
    props.navigation.navigate('Lists');
  };
  const deleteHandler = id => {
    console.log(id);
    dispatch(memoActions.deleteMemoAction(id));
    dispatch(memoActions.getMemosAction());
    props.navigation.navigate('Lists');
  };

  if (!content) {
    return (
      <ActivityIndicator
        color={'red'}
        size={'large'}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }

  return (
    <Viewcontainer marginHorizontal={20}>
      <Spacer height={30} />
      {edit ? (
        <Viewcontainer>
          {content && (
            <>
              <TextInput
                value={title}
                editable={true}
                onChangeText={title => setTitle(title)}
              />
              <TextInput
                value={description}
                editable={true}
                onChangeText={description => {
                  setdescription(description);
                }}
              />
            </>
          )}
        </Viewcontainer>
      ) : (
        <View>
          {content && content != undefined && (
            <>
              <TitleText
                title={title && title}
                fontSize={24}
                fontWeight={600}
              />
              <AbsoluteView right={10}>
                <Row>
                  <SmallTextBtn
                    text={!edit ? '편집' : '저장'}
                    onPress={
                      !edit ? openEditForm : () => editSubmit(content.id)
                    }
                  />
                  <SmallTextBtn
                    text={!edit ? '취소' : '삭제'}
                    onPress={() => deleteHandler(content.id)}
                  />
                </Row>
              </AbsoluteView>
              <Spacer height={30} />
              <DateText date={content && updatedAt} />

              <Text>{description && description}</Text>
            </>
          )}
        </View>
      )}
    </Viewcontainer>
  );
};

export default Contents;
