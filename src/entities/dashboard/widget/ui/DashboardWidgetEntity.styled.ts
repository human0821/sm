import { Link, Typography, styled } from "@mui/material";

import { Breakpoints, Mixins, Transitions } from "@/app/styles";

export const DashboardWidgetEntityWrapper = styled(Link)<Pick<DashboardWidgetEntity, "color" | "area">>`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  transition: background-color ${Transitions.SMALL};
  row-gap: 20px;
  ${({ area, color, theme }) => `
    grid-area: ${area};
    background-color: ${color};
    color: ${theme.palette.primary.main};

    ${
      area === "item3" || area === "item4"
        ? `
          flex-direction: column;
          svg {
            width: 100px !important;
            height: 100px !important;
          }`
        : "flex-direction: column-reverse;"
    }

    @media (min-width: ${Breakpoints.MOBILE_L}) {
      ${
        area === "item3" || area === "item4"
          ? `
            flex-direction: column;
            svg {
              width: 150px !important;
              height: 150px !important;
            }`
          : "flex-direction: column-reverse;"
      }
    }

    @media (min-width: ${Breakpoints.TABLET_L}) {
      ${
        area === "item2" || area === "item4"
          ? `
            flex-direction: column;
            svg {
              width: 150px !important;
              height: 150px !important;
            }`
          : "flex-direction: column-reverse;"
      }

      ${
        area === "item3" &&
        `svg {
            width: 75px !important;
            height: 70px !important;
         }`
      }
    }

    @media (min-width: ${Breakpoints.DESKTOP_L}) {
      ${
        area === "item2" || area === "item3"
          ? `
            flex-direction: column;
            svg {
              width: 156px !important;
              height: 220px !important;
            }`
          : "flex-direction: column-reverse;"
      }
      ${
        area === "item4" &&
        `svg {
            width: 100px !important;
            height: 85px !important;
         }`
      }
    }`}

  &:hover {
    background-color: ${(props) => props.color}95;
    text-decoration: none;
  }
`;

export const DashboardWidgetEntityName = styled(Typography)`
  font-size: 1.125rem;
  hyphens: auto;
  ${Mixins.textRowsEllipsis(2, "2.25rem")}

  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.25rem;
    ${Mixins.textRowsEllipsis(2, "2.5rem")}
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    font-size: 2rem;
    ${Mixins.textRowsEllipsis(2, "4rem")}
  }
`;

export const DashboardWidgetEntityLogo = styled("div")`
  & > svg {
    width: 60px;
    height: 55px;

    @media (min-width: ${Breakpoints.MOBILE_L}) {
      width: 75px;
      height: 70px;
    }

    @media (min-width: ${Breakpoints.DESKTOP_L}) {
      width: 100px;
      height: 85px;
    }
  }
`;
