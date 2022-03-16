import React from 'react';

//react-navigation-native
import {useNavigation} from '@react-navigation/native';

import styled from 'styled-components';

//header-back-svg
import BackBtnIcon from '../../../assets/svg/back_btn_svg.svg';

const NavGoBackBtn = () => {
  const navigation = useNavigation();
  return (
    <BackBtnWrap onPress={() => navigation.goBack()} activeOpacity={0.7}>
      <BackBtnIcon />
    </BackBtnWrap>
  );
};

export default NavGoBackBtn;

const BackBtnWrap = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
