import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { Fonts } from "@/app/styles";

export function MoreDetails({ link, text = "Подробнее" }: { link: string; text?: string }) {
  return (
    <Typography component={"span"} fontSize={"1.125rem"} fontFamily={Fonts.ROCK_STAR_SEMIBOLD}>
      <Link to={link}>{text}</Link>
    </Typography>
  );
}
