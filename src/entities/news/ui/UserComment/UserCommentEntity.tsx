import React, { useMemo } from "react";

import { Picture } from "@/shared/ui/Picture/Picture";
import { dateTimeFromISO } from "@/shared/utils/dateTimeFromISO";
import { imagePath } from "@/shared/utils/imagePath";

import {
  Comment,
  TopWrapper,
  PictureWrapper,
  Userdata,
  Details,
  Top,
  Username,
  Date,
  Text,
} from "./UserCommentEntity.styled";
import { ANONYM_USER, DEFAULT_AVATAR, NO_NAME } from "../../consts/consts";

export const UserCommentEntity: React.FC<UserComment.Component> = ({ children, hideText, comment }) => {
  const containedPropValue = (prop: string, obj: Record<string, any> | null) =>
    obj && prop in obj ? obj[prop] : undefined;
  const { author, text, created: date } = comment;
  const avatar = author?.avatar;
  const username =
    author?.fullName ||
    author?.shortenedName ||
    containedPropValue("full_name", author) ||
    ((comment.anonymousFlag || containedPropValue("anonymous_flag", comment)) && ANONYM_USER) ||
    NO_NAME;

  const dateTime = useMemo(() => dateTimeFromISO(date), [date]);
  const avaProps = useMemo(() => {
    if (avatar) {
      const [path, extension] = imagePath(avatar);
      return { src: path, extension };
    } else {
      return { src: DEFAULT_AVATAR, extension: "svg" };
    }
  }, [avatar]);

  return (
    <Comment>
      <TopWrapper>
        <PictureWrapper>
          <Picture container={{ width: "100%", height: "100%" }} {...avaProps} />
        </PictureWrapper>
        <Userdata>
          <Username>{username}</Username>
          <Date>{dateTime}</Date>
        </Userdata>
      </TopWrapper>
      <Details>
        <Top>
          <Username>{username}</Username>
          <Date>{dateTime}</Date>
        </Top>
        <Text editing={hideText}>{text}</Text>
        {children}
      </Details>
    </Comment>
  );
};
