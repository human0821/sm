import { Pagination as PaginationMui, PaginationItem } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";

import { ArrowNavigate } from "@/assets/icons";

import { Wrapper } from "./Pagination.styled";

export const Pagination = ({ count, position }: Pagination) => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const searchPage = searchParams.get("page");
    if (searchPage?.length) {
      setPage(Number(searchPage) || 1);
    }
  }, [search]);

  return (
    <>
      {count > 1 && (
        <Wrapper position={position}>
          <PaginationMui
            count={count}
            page={page}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`?page=${item.page}`}
                slots={{ previous: ArrowNavigate, next: ArrowNavigate }}
                {...item}
              />
            )}
          />
        </Wrapper>
      )}
    </>
  );
};
