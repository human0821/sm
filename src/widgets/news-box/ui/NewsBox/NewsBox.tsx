import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";

import { NewsType, useGetNewsDetailQuery } from "@/app/api/news/api";
import Routes from "@/app/routes/consts/routes";
import { motionFade } from "@/shared/consts/motion";
import { useAnchor } from "@/shared/hooks/useAnchor";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { Picture } from "@/shared/ui/Picture/Picture";
import { imagePath } from "@/shared/utils/imagePath";
import { CommentBox } from "@/widgets/comment-box";
import { ErrorBox } from "@/widgets/error-box";

import {
  Wrapper,
  HeadWrapper,
  RolesWrapper,
  BannerWrapper,
  Date,
  Header,
  Text,
  LeftWrapper,
  PageWrapper,
  LoaderWrapper,
  Anchor,
} from "./NewsBox.styled";
import { useRoles } from "../../hooks/useRoles";
import { LastNewsInline } from "../LastNewsInline/LastNewsInline";
import { Survey } from "../Survey/Survey";

export const NewsBox: React.FC = () => {
  const urlParams = useParams();
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const from = location.state?.from?.pathname;
  const redirectedFromLogin = from === Routes.AUTH_LOGIN_PAGE;
  const { id: newsId } = urlParams;
  const { data, isFetching, isError, error } = useGetNewsDetailQuery(
    { id: newsId! },
    { refetchOnMountOrArgChange: redirectedFromLogin },
  );
  const status = (error && "status" in error && error.status) as number;

  useAnchor();

  // workaround от мигающего экрана когда пользователь выходит с /news/:id на /auth/login и вновь заходит на /news/:id
  useEffect(() => {
    if (redirectedFromLogin && !initialized) {
      if (isFetching) {
        setIsRefetching(true);
      } else if (isRefetching) {
        setInitialized(true);
      }
    }
  }, [isFetching]);

  const roles = useRoles(data);

  const breadcrumbs = useMemo(() => {
    return [
      <BreadcrumbsLink underline="hover" key="-2" href={Routes.DASHBOARD_PAGE}>
        Главная
      </BreadcrumbsLink>,
      `${data?.header}`,
    ];
  }, [data]);

  const banner = useMemo(() => {
    if (data && data.banner) {
      const [path, ext] = imagePath(data.banner);
      return (
        <BannerWrapper>
          <Picture src={path} extension={ext} container={{ width: "100%", height: "100%" }} />
        </BannerWrapper>
      );
    }
  }, [data]);

  return (
    <AnimatePresence>
      {(redirectedFromLogin && !initialized) || (isFetching && !data) ? (
        <motion.div {...motionFade} key="1">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : !isError && data ? (
        <motion.div {...motionFade} key="2">
          <PageWrapper>
            <Helmet>
              <title>{data.header}</title>
            </Helmet>
            <LeftWrapper>
              <Wrapper>
                <Breadcrumbs items={breadcrumbs} />
                {banner}
                <HeadWrapper>
                  <RolesWrapper>{roles}</RolesWrapper>
                  <Date>{data.datePublish.split("-").reverse().join(".")}</Date>
                </HeadWrapper>
                <Header>{data.header}</Header>
                <Text dangerouslySetInnerHTML={{ __html: data.text }} />
                {data.newsType === NewsType.Survey && <Survey />}
                <LastNewsInline />
                {data.commentFlag && (
                  <>
                    <Anchor data-anchor="#comments" />
                    <CommentBox newsId={newsId} />
                  </>
                )}
              </Wrapper>
            </LeftWrapper>
          </PageWrapper>
        </motion.div>
      ) : (
        isError && (
          <motion.div {...motionFade}>
            <ErrorBox code={status} />
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};
