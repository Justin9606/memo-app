import React, {useEffect, useCallback} from 'react';
import {TouchableOpacity, ScrollView, View, Platform} from 'react-native';
import * as memoActions from '../../store/slices/memos';
import {useDispatch, useSelector} from 'react-redux';

//react-native lottie
import LottieView from 'lottie-react-native';

//containers
import Viewcontainer from '../../components/containers/ViewContainer';
import Row from '../../components/containers/Row';
import Horizontalline from '../../components/containers/HorizontalLine';
import Spacer from '../../components/containers/Spacer';

// Largebutton
import LargeButton from '../../components/common/Buttons/LargeButton';
import XDeleteBtn from '../../components/common/Buttons/XDeleBtn';

//Texts
import ContentText from '../../components/common/Texts/ContentText';
import TitleText from '../../components/common/Texts/TitleText';
import DateText from '../../components/common/Texts/DateText';

//delete svg

import AbsoluteView from '../../components/containers/AbsoluteView';

const Lists = props => {
  const dispatch = useDispatch();
  const memos = useSelector(state => state.memos.memos);

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

  const deleteHandler = id => {
    dispatch(memoActions.deleteMemoAction(id));
    dispatch(memoActions.getMemosAction());
    props.navigation.navigate('Lists');
  };

  return (
    <>
      <Viewcontainer marginHorizontal={20}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {memos[0] !== null &&
            memos.length > 0 &&
            memos
              .map(memo => {
                return (
                  <View key={memo.id}>
                    <Spacer height={30} />
                    <TouchableOpacity onPress={() => detailHander(memo)}>
                      <Row>
                        <TitleText title={memo.title} />
                        <Spacer width={10} />
                        <DateText date={memo.updatedAt} />
                      </Row>
                      <Spacer height={10} />

                      <ContentText
                        content={memo.description}
                        color={'#7f7e83'}
                        ellipsizeMode={'tail'}
                        numberOfLines={2}
                      />
                      <AbsoluteView right={0} top={0}>
                        <XDeleteBtn onPress={() => deleteHandler(memo.id)} />
                      </AbsoluteView>
                      <Spacer height={30} />
                    </TouchableOpacity>
                    <Horizontalline />
                  </View>
                );
              })
              .reverse()}

          {/* I am not using the Lottie Animation for Android cause
              When I test on android emulator it showed very weird look but I could not tested on Real Device cause not having android device */}
          {Platform.OS === 'android' && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <TitleText title="첫 번째 메모를 추가하세요." />
            </View>
          )}
          {/* ***** I could give the lottie animation in here using turnary operator ? : like, if the memos.length is empty then show the lottie
        animation but Cause of the marginHorizontal it is not displaying correctly, That it is the reason I wrote separately *****  */}
        </ScrollView>
      </Viewcontainer>

      {Platform.OS === 'ios' && memos.length === 0 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../../assets/lottie/empty.json')}
            style={{
              width: '100%',
              height: '100%',
            }}
            colorFilters={{backgroundColor: 'transparent'}}
            autoPlay
            loop
          />
        </View>
      )}
      <LargeButton
        title={'추가'}
        onPress={() => props.navigation.navigate('Create')}
      />
    </>
  );
};

export default Lists;
