import React from 'react';
import styled from 'styled-components';

const Viewcontainer = ({children, marginHorizontal, style}) => {
  return <Container marginHorizontal={marginHorizontal}>{children}</Container>;
};

export default Viewcontainer;

const Container = styled.View`
  flex: 1;

  padding-horizontal: ${props => props.marginHorizontal || 0}px;
`;
