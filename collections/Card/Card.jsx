// The Card to be exported goes here
import Image from "next/image.js";
import { CardContainer } from "../../components/Containers/CardContainer/CardContainer";
import { CardItem } from "../../components/CardItem";
import { StyledImageContainer, StyledCardInnerHeading, StyledCardParagraph  } from "../../sections/Main/elements";

export const Card = ({ image, cardTopImage, cardMidImage, cardBottomImage,  cardTitleTop, cardDescriptionTop, 
  cardTitleMid, cardDescriptionMid, cardTitleBottom, cardDescriptionBottom, ...props}) => {
  return (
    <Card {...props}>
      <CardContainer>
        <StyledImageContainer>
          <Image layout="responsive" src={image?.src} alt={image?.alt} width={image?.width} height={image?.height}/>
        </StyledImageContainer>
        <CardItem> 
          <Image layout="fixed" src={cardTopImage?.src} alt={cardTopImage?.alt} width={cardTopImage?.width} height={cardTopImage?.height}/>
          <StyledCardInnerHeading>{cardTitleTop}</StyledCardInnerHeading>
          <StyledCardParagraph>{cardDescriptionTop}</StyledCardParagraph>
        </CardItem>
        <CardItem> 
          <Image layout="fixed" src={cardMidImage?.src} alt={cardMidImage?.alt} width={cardMidImage?.width} height={cardMidImage?.height}/>
          <StyledCardInnerHeading>{cardTitleMid}</StyledCardInnerHeading>
          <StyledCardParagraph>{cardDescriptionMid}</StyledCardParagraph>
        </CardItem>
        <CardItem> 
        <Image layout="fixed" src={cardBottomImage?.src} alt={cardBottomImage?.alt} width={cardBottomImage?.width} height={cardBottomImage?.height}/>
          <StyledCardInnerHeading>{cardTitleBottom}</StyledCardInnerHeading>
          <StyledCardParagraph>{cardDescriptionBottom}</StyledCardParagraph>
        </CardItem>
      </CardContainer>
    </Card>
  );
};