import React from 'react';

//styled components
import styled from 'styled-components';

const Row = ({children, alignItems, justifyContent}) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
};

export default Row;

const Container = styled.View`
  flex-direction: row;

  align-items: ${props => props.alignItems || 'center'};
`;
