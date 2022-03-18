//React
import React from 'react';

//styled
import styled from 'styled-components';

const Label = ({label, fontSize, color, ellipsizeMode, numberOfLines}) => {
  return (
    <LabelText
      fontSize={fontSize}
      color={color}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {label}
    </LabelText>
  );
};

export default Label;

const LabelText = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || 14}px;
  font-weight: 500;
  justify-content: flex-start;
`;
