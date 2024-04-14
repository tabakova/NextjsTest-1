import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledFlexContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledBox,
  StyledBoxTop,
  StyledBoxMiddle,
  StyledBoxBottom,
} from "./elements";
import { StyledSectionContainer } from "../../components/Containers/SectionContainer/elements";

export const Hero = ({ image, title, description, textBox, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledFlexContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledSectionContainer>
          <StyledBoxTop>
            {" "}
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            {textBox.top}
          </StyledBoxTop>
          <StyledBoxMiddle>{textBox.middle}</StyledBoxMiddle>
          <StyledBoxBottom>{textBox.bottom}</StyledBoxBottom>
        </StyledSectionContainer>
      </StyledFlexContainer>
    </StyledContainer>
  );
};
