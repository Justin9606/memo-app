import React from 'react';

import styled from 'styled-components';

const Content = ({content, fontSize, color, ellipsizeMode, numberOfLines}) => {
  return (
    <ContentText
      fontSize={fontSize}
      color={color}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {content}
    </ContentText>
  );
};

export default Content;

const ContentText = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.fontSize || 14}px;
  font-weight: 500;
  margin-right: 40px;
`;
