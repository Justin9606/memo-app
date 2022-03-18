import React from 'react';

//styled components
import styled from 'styled-components';

const AbsoluteView = ({children, right, top}) => {
  return (
    <AbsoluteViewWrap right={right} top={top}>
      {children}
    </AbsoluteViewWrap>
  );
};

export default AbsoluteView;

const AbsoluteViewWrap = styled.View`
  position: absolute;
  justify-self: center;
  align-items: center;
  right: ${props => props.right}px;
  top: ${props => props.top}px;
`;
