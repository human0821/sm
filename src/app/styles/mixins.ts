import { adjustColor } from "./functions";

export const scrollbar = ({ width = "7px", scrollbarColor = "transparent", visible = true, color = "" }) => `
  ${visible ? "" : "scrollbar-width: none; -ms-overflow-style: none;"}
  scrollbar-color: transparent;
  &::-webkit-scrollbar-track {
    margin: 10px;
  }
  &::-webkit-scrollbar {
    ${visible ? "" : "display: none;"}
    width: ${width};
    height: ${width};
    background-color: ${scrollbarColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${adjustColor(color, -20)};
  }
`;

export const scrollbarObject = ({ width = "7px", scrollbarColor = "transparent", color = "" }) => ({
  scrollbarColor: "transparent",
  "&::-webkit-scrollbar-track": {
    margin: "10px",
  },
  "&::-webkit-scrollbar": {
    width,
    height: width,
    backgroundColor: scrollbarColor,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: color,
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: adjustColor(color, -20),
  },
});

export const buttonClear = () => `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
`;

export const textEllipsis = () => `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const textEllipsisObject = () => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const textRowsEllipsis = (rows: number, height: number | string) => `
  display: -webkit-box;
  max-height: ${height};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${rows};
  line-height: calc(${height} / ${rows});
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const textRowsEllipsisObject = (rows: number, height: number | string) => ({
  display: "-webkit-box",
  maxHeight: height,
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": `${rows}`,
  lineHeight: `calc(${height} / ${rows})`,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const iconSize = (size: number) => `
  & > svg {
    width: ${size}px;
    height: ${size}px;
  }
`;

export default {
  scrollbar,
  iconSize,
  textEllipsis,
  textEllipsisObject,
  textRowsEllipsis,
  textRowsEllipsisObject,
  buttonClear,
  scrollbarObject,
};
