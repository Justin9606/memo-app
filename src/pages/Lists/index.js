import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import * as memoActions from '../../store/slices/memos';
import {useDispatch, useSelector} from 'react-redux';

//containers
import Viewcontainer from '../../components/containers/ViewContainer';
import Row from '../../components/containers/Row';
import Horizontalline from '../../components/containers/HorizontalLine';
import Spacer from '../../components/containers/Spacer';

// Largebutton
import LargeButton from '../../components/common/Buttons/LargeButton';

//Texts
import ContentText from '../../components/common/Texts/ContentText';
import TitleText from '../../components/common/Texts/TitleText';
import DateText from '../../components/common/Texts/DateText';

const Lists = props => {
  const dispatch = useDispatch();
  const memos = useSelector(state => state.memos.memos);

  console.log('Memos', memos);

  const getMemos = useCallback(async () => {
    dispatch(memoActions.getMemosAction());
  }, [dispatch]);

  useEffect(() => {
    getMemos();
  }, []);

  const detailHander = memo => {
    props.navigation.navigate('Content');
    dispatch(memoActions.getSingleData(memo.id));
  };

  return (
    <Viewcontainer marginHorizontal={20}>
      <ScrollView style={{flex: 1}}>
        {memos[0] !== null && memos.length > 0 ? (
          memos
            .map(memo => {
              return (
                <>
                  <Spacer height={30} />
                  <TouchableOpacity
                    key={memo.id}
                    onPress={() => detailHander(memo)}>
                    <Row>
                      <TitleText title={memo.title} />
                      <Spacer width={10} />
                      <DateText date={memo.updatedAt} />
                    </Row>
                    <Spacer height={10} />
                    <ContentText content={memo.description} />
                    <Spacer height={30} />
                  </TouchableOpacity>
                  <Horizontalline />
                </>
              );
            })
            .reverse()
        ) : (
          <View>
            <Text>There is no any memo yet</Text>
          </View>
        )}
      </ScrollView>
      <LargeButton
        title={'추가'}
        onPress={() => props.navigation.navigate('Create')}
      />
    </Viewcontainer>
  );
};

export default Lists;
