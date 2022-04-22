import { StyledCardTopItem, StyledCardMidItem, StyledCardBottomItem } from "./elements";

export const CardItem = ({ ...props }) => {
  return (
    <>
      <StyledCardTopItem {...props} />
      <StyledCardMidItem {...props} />
      <StyledCardBottomItem {...props} />
    </>
  )
};
