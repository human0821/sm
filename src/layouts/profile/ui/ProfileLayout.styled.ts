import { Tab, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ProfileWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ProfileHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileTab = styled(Tab)`
  height: 60px;
  min-width: 300px;
`;

export const TabsWrapper = styled("div")`
  display: flex;
  flex: 1;
  button {
    padding: 0 9px;
    font-size: 0.625rem;
    ${mediaQueryHelp({
      fontSize: { s: "0.875rem", m: "1rem", l: "1.125rem" },
    })}
  }
`;
