import React from 'react';

//styled components
import styled from 'styled-components';

const Horizontalline = ({width, height}) => {
  return <Container width={width} height={height} />;
};

export default Horizontalline;

const Container = styled.View`
  width: 100%;
  height: ${props => props.height || 1}px;
  background-color: #dae3e9;
  border-radius: 5px;
`;
