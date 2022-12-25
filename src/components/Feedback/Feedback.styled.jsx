import styled from '@emotion/styled';
export const BtnWrap = styled.div`
display: flex;
justify-content: space-around;
gap: 10px;
`;

export const BtnFeedback = styled.button`
display: flex;
flex-direction: row;
border: none;
justify-content: center;
align-items: center;
border-radius: 4px;
cursor: pointer;
width: 80px;
height: 30px;

&:hover {
scale: 1.1;
background-color: #21bdfa;
}
`;
