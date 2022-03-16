import React from 'react';

import styled from 'styled-components';

const Spacer = ({height, width}) => {
  return <Container height={height} width={width} />;
};

export default Spacer;

const Container = styled.View`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
`;
