import React from 'react';

//styled components
import styled from 'styled-components';

const AbsoluteView = ({children, top, left, right, bottom}) => {
  return (
    <AbsoluteViewWrap top={top} left={left} right={right} bottom={bottom}>
      {children}
    </AbsoluteViewWrap>
  );
};

export default AbsoluteView;

const AbsoluteViewWrap = styled.View`
  position: absolute;
  justify-self: center;
  top: ${props => props.top || 0}px;
  left: ${props => props.left || 0}px;
  right: ${props => props.right || 0}px;
  bottom: ${props => props.bottom || 0}px;
`;
