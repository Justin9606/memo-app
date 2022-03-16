//react
import React from 'react';

//styled components
import styled from 'styled-components';

const LargeButton = ({onPress, title}) => {
  return (
    <ButtonWrap onPress={onPress} activeOpacity={0.7}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonWrap>
  );
};

export default LargeButton;

const ButtonWrap = styled.TouchableOpacity`
  height: 64px;
  width: 327px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: black;
  position: absolute;
  bottom: 30px;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  font-weight: 600;
`;
