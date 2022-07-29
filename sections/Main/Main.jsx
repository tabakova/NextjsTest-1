import Image from "next/image";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";
import { Card } from "../../collections";

export const Main = ({ title, description, image, cardTopImage, cardMidImage, cardBottomImage,  cardTitleTop, cardDescriptionTop, 
  cardtitlemid, carddescriptionmid, cardtitlebottom, carddescriptionbottom, ...props }) => {
  return (
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <Card {...props} />
      </StyledContainer> 
  );
};
