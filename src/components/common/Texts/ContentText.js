import React from 'react';

import styled from 'styled-components';

const Content = ({content, fontSize}) => {
  return <ContentText fontSize={fontSize}>{content}</ContentText>;
};

export default Content;

const ContentText = styled.Text`
  color: #7f7e83;
  font-size: ${props => props.fontSize || 14}px;
  font-weight: 500;
`;
