import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  background: url("../../img/background.png") no-repeat;
  background-size: contain;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
  // padding: 3% 0 0;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  text-align: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  // margin-left: 11.125rem;
  font-family: sans-serif;
  padding: 3%;
`;

export const StyledSectionParagraph = styled(({ ...props }) => <div {...props} />)`
  color: black;
  text-align: center;
  // margin-left: 11.125rem;
  font-family: sans-serif;
`;