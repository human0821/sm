import { styled, Typography } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { ButtonLoading } from "@/shared/ui/Button";

export const Wrapper = styled("div")<{ isLoading: boolean }>`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
  ${mediaQueryHelp({
    maxWidth: { l: "752px", xxl: "908px" },
    gap: { l: "32px", xl: "40px" },
  })}
`;
export const Form = styled("div")`
  background: ${Colors.SECTION_BACKGROUND};
  border-radius: 15px;
  padding: 20px 10px;
  ${mediaQueryHelp({
    borderRadius: { s: "30px" },
    padding: { s: "20px", m: "40px" },
  })}
`;
export const Title = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  margin-bottom: 16px;
  ${mediaQueryHelp({
    fontSize: { s: "1.125rem", m: "1.25rem", l: "1.5rem", xl: "2rem" },
    lineHeight: { s: "1.25rem", l: "1.25rem", xl: "1.25rem" },
    marginBottom: { s: "20px", l: "40px" },
  })}
`;
export const FieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
  & > .MuiTextField-root {
    margin-top: 20px;
    &:nth-child(1) {
      margin-top: 0px;
    }
  }
  ${mediaQueryHelp({
    marginTop: { s: "40px", m: "44px", l: "60px" },
  })}
`;

export const SendButton = styled(ButtonLoading)`
  width: 100%;
  margin-left: auto;
  display: block;
  ${mediaQueryHelp({
    width: { l: "384px", xl: "368px", xxl: "444px" },
  })}
`;
export const InputList = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
  gap: 40px 20px;
  ${mediaQueryHelp({
    gridTemplateColumns: { m: "1fr 1fr" },
  })}
`;
