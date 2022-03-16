import React from 'react';

import styled from 'styled-components';

const Title = ({title, fontSize, fontWeight}) => {
  return (
    <TitleText fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </TitleText>
  );
};

export default Title;

const TitleText = styled.Text`
  color: #323234;
  font-size: ${props => props.fontSize || 16}px;
  font-weight: ${props => props.fontWeight || 500};
`;
