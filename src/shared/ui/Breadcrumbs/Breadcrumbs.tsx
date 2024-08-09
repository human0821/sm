import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { BreadcrumbsWrapper, BreadcrumbsLink, BreadcrumbsTitle, BreadcrumbsChevron } from "./Breadcrumbs.styled";

export const Breadcrumbs: React.FC<BreadcrumbsData> = ({ items = [], defaultBreadcrumbs = true }) => {
  const navigate = useNavigate();

  const breadcrumbs = useMemo(() => {
    const breadcrumbsDefault = [
      <BreadcrumbsLink underline="hover" key="-1" onClick={() => navigate(-1)}>
        Назад
      </BreadcrumbsLink>,
    ];
    const itemsPrepared = items.map((item, index) =>
      typeof item === "string" ? <BreadcrumbsTitle key={index}>{item}</BreadcrumbsTitle> : item,
    );
    return defaultBreadcrumbs ? [...breadcrumbsDefault, ...itemsPrepared] : itemsPrepared;
  }, [items, defaultBreadcrumbs]);

  return (
    <BreadcrumbsWrapper>
      <MUIBreadcrumbs separator={<BreadcrumbsChevron />} aria-label="breadcrumb">
        {breadcrumbs}
      </MUIBreadcrumbs>
    </BreadcrumbsWrapper>
  );
};
