//react
import React from 'react';

//styled components
import styled from 'styled-components';

const TextInput = ({
  placeholder,
  onChangeText,
  defaultValue,
  editable,
  multiline,
  fontSize,
  color,
  fontWeights,
  borderBottomWidth,
  paddingBottom,
  autoFocus,
}) => {
  return (
    <InputWrap>
      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        editable={editable}
        multiline={multiline}
        fontSize={fontSize}
        color={color}
        fontWeights={fontWeights}
        borderBottomWidth={borderBottomWidth}
        paddingBottom={paddingBottom}
        autoFocus={autoFocus}
      />
    </InputWrap>
  );
};

export default TextInput;

const InputWrap = styled.View``;

const Input = styled.TextInput`
  font-size: ${props => props.fontSize}px;

  font-weight: ${props => props.fontWeights || 600};
  border-bottom-width: ${props => props.borderBottomWidth || 0}px;
  padding-bottom: ${props => props.paddingBottom || 0}px;
  border-bottom-color: #c4c4c4;
`;
