import React from "react";

import { ReplyIcon } from "@/assets/icons";

import { ReplyWrapper, ReplyText } from "./Reply.styled";

export const Reply: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <ReplyWrapper onClick={onClickHandler}>
      <ReplyIcon />
      <ReplyText>{text}</ReplyText>
    </ReplyWrapper>
  );
};
