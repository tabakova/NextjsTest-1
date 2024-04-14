import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  background-image: url("./img/background.png");
  background-size: cover;
`;

export const StyledFlexContainer = styled(({ height, ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin-top: 0.2rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 20%;
  height: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const StyledBox = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.375rem;
`;

export const StyledBoxTop = styled(StyledBox)`
  background-color: #f9f9f9;
`;

export const StyledBoxMiddle = styled(StyledBox)`
  background-color: #f4f4f4;
`;

export const StyledBoxBottom = styled(StyledBox)`
  background-color: #f1f1f1;
  border: 2px solid #006efd;
`;
