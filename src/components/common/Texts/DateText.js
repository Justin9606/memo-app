import React from 'react';

import styled from 'styled-components';

const DateText = ({date, fontSize}) => {
  return <DateTextWrap fontSize={fontSize}>{date}</DateTextWrap>;
};

export default DateText;

const DateTextWrap = styled.Text`
  color: #c4c4c4;
  font-size: ${props => props.fontSize || 12}px;
  font-weight: 500;
`;
