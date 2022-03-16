import React from 'react';

//styled components
import styled from 'styled-components';

const TextButton = ({text, onPress}) => {
  return (
    <ButtonWrap activeOpacity={0.7} onPress={onPress}>
      <ButtonTitle>{text}</ButtonTitle>
    </ButtonWrap>
  );
};

export default TextButton;

const ButtonWrap = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const ButtonTitle = styled.Text`
  font-size: 14px;
  color: #147efb;
  font-weight: 500;
  text-align: center;
`;
