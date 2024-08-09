import React from "react";

import { DislikeIcon, LikeIcon } from "@/assets/icons";

import { Count, LikeWrapper } from "./Like.styled";

export const Like: React.FC<Like> = ({ type, count, isActive, onClick }) => {
  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <LikeWrapper isActive={isActive} onClick={onClickHandler}>
      {type === "LIKE" ? <LikeIcon /> : <DislikeIcon />}
      <Count>{count}</Count>
    </LikeWrapper>
  );
};
