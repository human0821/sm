import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import { Mixins, Fonts, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

export const InfoWrapper = styled("div")`
  display: flex;
  gap: 10px;
  align-items: center;
  ${mediaQueryHelp({ gap: { l: "15px" } })}
`;

export const InfoAvatar = styled(Avatar)`
  align-self: flex-start;
  flex-shrink: 0;
  border-radius: 15px;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  border-radius: 9px;
  ${mediaQueryHelp({
    width: { s: "72px", m: "80px" },
    height: { s: "72px", m: "80px" },
    minWidth: { s: "72px", m: "80px" },
    maxWidth: { s: "72px", m: "80px" },
    borderRadius: "13.5px",
  })}
`;

export const InfoBlock = styled("div")`
  display: grid;
  gap: 5px;
  overflow: hidden;
  ${mediaQueryHelp({
    gap: { m: "15px" },
  })}
`;

export const InfoLink = styled(Link)`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: all ${Transitions.MEDIUM} ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  ${Mixins.textRowsEllipsis(1, "1.5rem")};
  ${mediaQueryHelp({
    fontSize: ["", "1rem", "1.125rem", "1.25rem", "1.5rem", "1.5rem"],
  })}
`;

export const InfoDescription = styled("div")`
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  transform: translateY(-5px);
  ${Mixins.textEllipsis()}
  ${mediaQueryHelp({ fontSize: { s: "0.875rem", l: "1rem", xl: "1.125rem" } })}
`;

export const RolesListWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
`;

export const RolesList = styled("div")`
  display: flex;
  gap: 10px 16px;
  align-items: center;
  flex-wrap: wrap;
  > div {
    font-size: 12px;
    ${mediaQueryHelp({ fontSize: { m: "0.875rem" } })}
  }
  ${Mixins.textEllipsis()}
`;
