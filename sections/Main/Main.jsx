import Image from "next/image";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";
import { CardContainer } from "../../components/Containers/CardContainer/CardContainer";
import { CardItem } from "../../components/CardItem";
import { StyledImageContainer, StyledCardInnerHeading, StyledCardParagraph  } from "../../sections/Main/elements";

export const Main = ({ title, description, image, cardtopimage, cardmidimage, cardbottomimage,  cardtitletop, carddescriptiontop, 
  cardtitlemid, carddescriptionmid, cardtitlebottom, carddescriptionbottom, ...props }) => {
  return (
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <CardContainer {...props}>
        <StyledImageContainer>
          <Image layout="responsive" src={image?.src} alt={image?.alt} width={image?.width} height={image?.height}/>
        </StyledImageContainer>
        <CardItem> 
          <Image layout="fixed" src={cardtopimage?.src} alt={cardtopimage?.alt} width={cardtopimage?.width} height={cardtopimage?.height}/>
          <StyledCardInnerHeading>{cardtitletop}</StyledCardInnerHeading>
          <StyledCardParagraph>{carddescriptiontop}</StyledCardParagraph>
        </CardItem>
        <CardItem> 
          <Image layout="fixed" src={cardmidimage?.src} alt={cardmidimage?.alt} width={cardmidimage?.width} height={cardmidimage?.height}/>
          <StyledCardInnerHeading>{cardtitlemid}</StyledCardInnerHeading>
          <StyledCardParagraph>{carddescriptionmid}</StyledCardParagraph>
        </CardItem>
        <CardItem> 
        <Image layout="fixed" src={cardbottomimage?.src} alt={cardbottomimage?.alt} width={cardbottomimage?.width} height={cardbottomimage?.height}/>
          <StyledCardInnerHeading>{cardtitlebottom}</StyledCardInnerHeading>
          <StyledCardParagraph>{carddescriptionbottom}</StyledCardParagraph>
        </CardItem>
      </CardContainer>
      </StyledContainer> 
  );
};
