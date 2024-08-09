import { styled } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";

export const WysiwygStyle = styled("div")<{ minHeight?: string }>`
  .quill,
  .ql-container,
  .ql-editor {
    min-height: ${({ minHeight }) => minHeight || "300px"};
  }

  .quill {
    background: ${Colors.WHITE};
    border-radius: 16px;
    border: 1px solid ${Colors.DIVIDER};
    .ql-toolbar {
      border: none;
      border-bottom: 1px solid ${Colors.DIVIDER};
    }
    .ql-container {
      border: none;
      font-family: ${Fonts.GEOLOGICA_REGULAR};
      font-size: 1.125rem;
    }

    .ql-editor {
    }

    .ql-editor.ql-blank::before {
      font-family: ${Fonts.GEOLOGICA_REGULAR};
      font-style: normal;
      font-size: 1.125rem;
      color: ${({ theme }) => theme.palette.text.primary}70;
    }
  }
`;
