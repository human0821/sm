import { styled } from "@mui/material";

import { Functions } from "@/app/styles";

export const FaqWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Functions.mediaQueryHelp({ gap: { l: 40 } })}
`;

export const FaqList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Functions.mediaQueryHelp({ gap: { s: 20 } })}
`;

export const HeaderWrapper = styled("div")<{ withButton?: boolean }>`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${({ withButton }) =>
    withButton
      ? Functions.mediaQueryHelp({
          gridTemplateColumns: {
            m: "1fr 1fr",
            l: "1fr 304px",
            xl: "1fr 363px",
            xxl: "1fr 443px",
          },
        })
      : undefined}
`;

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px);
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
