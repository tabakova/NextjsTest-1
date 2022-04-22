// The Card to be exported goes here
import Image from "next/image.js";
import { CardContainer } from "../../components/Containers/CardContainer/CardContainer";
import { CardItem } from "../../components/CardItem";
import { StyledImageContainer, StyledCardInnerHeading, StyledCardParagraph  } from "../../sections/Main/elements";

export const Card = ({ image, cardtopimage, cardmidimage, cardbottomimage,  cardtitletop, carddescriptiontop, 
  cardtitlemid, carddescriptionmid, cardtitlebottom, carddescriptionbottom, ...props}) => {
  return (
    <Card {...props}>
      <CardContainer>
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
    </Card>
  );
};