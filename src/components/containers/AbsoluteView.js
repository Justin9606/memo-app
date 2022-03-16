import React from 'react';

//styled components
import styled from 'styled-components';

const AbsoluteView = ({children, right}) => {
  return <AbsoluteViewWrap right={right}>{children}</AbsoluteViewWrap>;
};

export default AbsoluteView;

const AbsoluteViewWrap = styled.View`
  position: absolute;
  justify-self: center;
  align-items: center;
  right: ${props => props.right || 20}px;
  top: 10px;
`;
