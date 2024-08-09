import { DeleteNoticeButton } from "@/features/notifications/delete-button";

import {
  NotificationWrapper,
  NotificationContent,
  NotificationBlock,
  NotificationText,
  Separator,
  NotificationContentWrapper,
  Message,
  Flag,
} from "./NotificationEntity.styled";

export const NotificationEntity = ({ id, date, time, message, readed }: NotificationEntity) => {
  return (
    <NotificationWrapper>
      <Flag show={!readed} />
      <NotificationContentWrapper>
        <NotificationContent>
          <Message>{message}</Message>
          <NotificationBlock>
            <NotificationText>{date}</NotificationText>
            <Separator />
            <NotificationText>{time}</NotificationText>
          </NotificationBlock>
        </NotificationContent>
        <DeleteNoticeButton id={id} />
      </NotificationContentWrapper>
    </NotificationWrapper>
  );
};
