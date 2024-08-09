import { TextField, styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

export const DiscountsSellersAvatar = styled(Avatar)`
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
  background: ${({ theme }) => theme.palette.background.disabled};

  ${mediaQueryHelp({
    width: { xs: "40px", s: "80px", l: "100px" },
    height: { xs: "40px", s: "80px", l: "100px" },
  })}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DiscountsSellersEditDiscount = styled(TextField)`
  background: ${({ theme }) => theme.palette.background.default};
  min-height: auto !important;
  border-radius: 15px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 5px;

  input {
    ${mediaQueryHelp({ fontSize: ["0.875rem", "1rem", "1.125rem"] })}
  }

  .MuiInputBase-root {
    min-height: auto;
    padding: 0;
  }

  ${mediaQueryHelp({
    width: ["60px", "70px", "100px"],
    height: ["40px !important", "48px !important", "64px !important"],
  })}

  & input {
    text-align: center;
    padding: 0 5px !important;
  }
`;

export const DiscountsSellersTitle = styled("h3")`
  font-size: clamp(16px, 1.3vw, 24px);
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
`;

export const DiscountsSellersEmployees = styled(TextField)``;
