import styled from "styled-components";

// export const StyledCardItem = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
//   background-color: #F0F0F0;
//   padding: 10px;
//   border-radius: 10px;
//   // max-width: 1920px;
//   justify-content: center;
//   align-items: center;
//   // @media (max-width: 768px) {
//   //   flex-direction: column;
//   // }
// `;

export const StyledCardTopItem = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  grid-column: 6 / 12;
  background:green;
  overflow:hidden;
  height: auto;
  background-color: #F0F0F0;
  padding: 10px;
  border-radius: 10px;
`;
export const StyledCardMidItem = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  grid-column: 6 / 12;
  background:green;
  overflow:hidden;
  height: auto;
  background-color: #F0F0F0;
  padding: 10px;
  border-radius: 10px;
`;
export const StyledCardBottomItem = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  grid-column: 6 / 12;
  background:green;
  overflow:hidden;
  height: auto;
  background-color: #F0F0F0;
  padding: 10px;
  border-radius: 10px;
`;

