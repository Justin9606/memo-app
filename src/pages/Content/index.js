import {View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import * as memoActions from '../../store/slices/memos';
import {useDispatch, useSelector} from 'react-redux';

//moment for date
import moment from 'moment';

//common
import SmallTextBtn from '../../components/common/Buttons/SmallTextBtn';
import Input from '../../components/common/TextInput/TextInput';

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
  const cancelEdit = () => {
    setEdit(false);
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
        <>
          {content && (
            <>
              <Input
                defaultValue={title}
                editable={true}
                fontSize={24}
                onChangeText={title => setTitle(title)}
                autoFocus={true}
                multiline={true}
              />
              <Spacer height={30} />
              <DateText date={content && updatedAt} textAlign={'right'} />
              <Spacer height={55} />
              <Input
                defaultValue={description}
                editable={true}
                multiline={true}
                fontSize={14}
                fontWeights={500}
                onChangeText={description => {
                  setdescription(description);
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          {content && content !== undefined && (
            <View>
              <TitleText
                title={title && title}
                fontSize={24}
                fontWeight={600}
              />
              <Spacer height={30} />
              <DateText date={content && updatedAt} textAlign={'right'} />
              <Spacer height={60} />
              <ContentText
                content={description && description}
                color={'#7f7e83'}
              />
            </View>
          )}
        </>
      )}
      <AbsoluteView right={20} top={35}>
        <Row>
          <SmallTextBtn
            text={!edit ? '편집' : '저장'}
            onPress={!edit ? openEditForm : () => editSubmit(content.id)}
          />
          <Spacer width={20} />
          <SmallTextBtn
            text={!edit ? '삭제' : '취소'}
            onPress={!edit ? () => deleteHandler(content.id) : cancelEdit}
          />
        </Row>
      </AbsoluteView>
    </Viewcontainer>
  );
};

export default Contents;
