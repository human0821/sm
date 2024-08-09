import { useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";

import { useGetNewsDetailQuery, useGetNewsLastQuery } from "@/app/api/news/api";
import { Breakpoints } from "@/app/styles";
import { MainLayoutNews } from "@/layouts/main/ui/MainLayout.styled";
import { LayoutNewsWidget } from "@/widgets/layout/news";

import { NewsBoxLayoutOutlet, NewsBoxLayoutSidebar, NewsBoxLayoutWrapper } from "./NewsBoxLayout.styled";

export function NewsBoxLayout({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();
  const urlParams = useParams();
  const { id } = urlParams;
  const newsId = id!;
  const { isError, isLoading } = useGetNewsDetailQuery({ id: newsId });
  const { data: newsLast, isLoading: newsLastLoading } = useGetNewsLastQuery({ page: 1, size: 10 });
  const isTabletL = useMediaQuery(`(min-width:${Breakpoints.DESKTOP})`);

  return (
    <NewsBoxLayoutWrapper>
      <NewsBoxLayoutOutlet>
        <Outlet />
        {children}
      </NewsBoxLayoutOutlet>
      {isTabletL && !isError && !isLoading && (
        <NewsBoxLayoutSidebar theme={theme} hide={!newsLastLoading && (!newsLast?.items || newsLast?.items.length === 0)}>
          <AnimatePresence initial={false} mode={"wait"}>
            <MainLayoutNews initial={{ width: 0 }} exit={{ width: 0 }}>
              <LayoutNewsWidget hidePinned={true} canToggle={false} />
            </MainLayoutNews>
          </AnimatePresence>
        </NewsBoxLayoutSidebar>
      )}
    </NewsBoxLayoutWrapper>
  );
}
