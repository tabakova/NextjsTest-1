// Styled elements for the Card go here
import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components";

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 55%;
  // padding: 5%;
`;

export const StyledCardInnerHeading = styled((props) => <SectionInnerHeading {...props} />)`
  font-weight: bold;
  display: block;

`;
export const StyledCardParagraph = styled((props) => <SectionParagraph {...props} />)`
  font-size: 16px;
`;

