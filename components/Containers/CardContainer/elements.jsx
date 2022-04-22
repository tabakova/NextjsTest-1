import styled from "styled-components";

// export const StyledCardContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   gap: 30px;
//   max-width: 1920px;
//   width: 60%;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
//   // width: 100%;
//   // height: auto;
//   // margin-left: auto;
//   // margin-right: auto;
//   // margin-top: ${({ topMargin }) => topMargin}rem;
//   // margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
// `;

export const StyledCardContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display:grid;
  grid-template-columns:repeat(11, 2fr);
  row-gap:11px;
  width:100%;
`;