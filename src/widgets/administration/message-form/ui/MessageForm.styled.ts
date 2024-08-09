import { Button, styled, Typography } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MessagesContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-top: 16px;
  ${mediaQueryHelp({
    maxWidth: { l: "786px", xl: "752px", xxl: "908px" },
    marginTop: { s: "24px", l: "32px", xl: "40px" },
  })}
`;

export const MessagesForm = styled("div")`
  padding: 20px;
  border-radius: 15px;
  background: ${Colors.SECTION_BACKGROUND};
  ${mediaQueryHelp({
    borderRadius: { s: "30px" },
    padding: { s: "40px" },
  })}
`;

export const MessagesTitle = styled(Typography)`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 1.125rem;
  line-height: 1.35rem;
  margin-bottom: 44px;
  ${mediaQueryHelp({
    fontSize: { m: "1.5rem", xl: "2rem" },
    lineHeight: { m: "1.8rem", xl: "2.4rem" },
    marginBottom: { s: "52px", m: "60px" },
  })}
`;

export const MessagesFields = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 36px;
  ${mediaQueryHelp({
    gap: { s: "40px" },
  })}

  & > :last-child {
    margin-top: 20px;
  }
`;

export const MessagesToggle = styled("div")`
  margin-top: 24px;
  ${mediaQueryHelp({
    marginTop: { s: "32px", m: "40px" },
  })}
`;

export const MessagesBtn = styled(Button)`
  margin-top: 20px;
  max-width: 100%;
  margin-left: auto;
  width: 100%;
  display: block;
  ${mediaQueryHelp({
    marginTop: { s: "13px", m: "6px", l: "14px", xl: "22px" },
    maxWidth: { m: "353px", l: "384px", xl: "368px", xxl: "444px" },
  })}
`;

export const SelectDateWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  ${mediaQueryHelp({
    gap: { s: "20px" },
    flexDirection: { s: "row" },
    alignItems: { s: "center" },
  })}

  & > :first-child {
    width: 100%;
  }
`;

export const DiscardDate = styled("button")`
  width: 94px;
  color: ${Colors.ERROR};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-size: 0.875rem;
  line-height: 0.875rem;

  ${mediaQueryHelp({
    width: { s: "108px", m: "118px" },
    fontSize: { s: "1rem", m: "1.125rem" },
    lineHeight: { s: "1rem", m: "1.125rem" },
  })}

  svg {
    min-width: 20px;
    height: 20px;

    ${mediaQueryHelp({
      minWidth: { s: "24px" },
      height: { s: "24px" },
    })}
  }
`;
