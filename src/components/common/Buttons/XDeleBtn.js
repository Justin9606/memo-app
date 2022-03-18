import React from 'react';

//styled components
import styled from 'styled-components';

//close btn svg from assets/svg
import DeleteSVG from '../../../assets/svg/delete.svg';

const DeleteBtn = ({onPress}) => {
  return (
    <CloseBTnWrap onPress={onPress} activeOpacity={0.7}>
      <DeleteSVG />
    </CloseBTnWrap>
  );
};
export default DeleteBtn;

const CloseBTnWrap = styled.TouchableOpacity`
  border-radius: 15px;
  background-color: #f3f8fb;
  padding: 2px;
`;
