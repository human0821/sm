import { _bannersAdminApi } from "./bannersAdminApi";
import { _newsAdminApi } from "./newsAdminApi";
import { _partnersAdminApi } from "./partnersAdminApi";
import { _picturesAdminApi } from "./picturesAdminApi";
import { _usersAdminApi } from "./usersAdminApi";

/** В этом месте усиливаем наши точки и добавляем к ним функционал по необходимости
 *  (автоматически сгенерированные точки не трогаем) */

const partnersAdminApi = _partnersAdminApi.enhanceEndpoints({
  endpoints: {
    getSiteDesignAdmin: {
      providesTags: ["DesignSiteSchema"],
    },
    patchSiteDesignAdmin: {
      invalidatesTags: ["DesignSiteSchema"],
    },
    getWidgetsInfoAdmin: {
      providesTags: ["AccountSettingsWidgets"],
    },
    patchWidgetsInfoAdmin: {
      invalidatesTags: ["MainWidgets", "AccountSettingsWidgets"],
    },
    getWidgetsPublicAdmin: {
      providesTags: ["MainWidgets"],
    },
    getMarkupAdmin: {
      providesTags: ["PartnersMarkup"],
    },
    putOrCreateMarkupAdmin: {
      invalidatesTags: ["PartnersMarkup", "MarkupSubsections", "MarkupBrands", "PartnersMarkups"],
    },
    getDiscountAdmin: {
      providesTags: ["PartnersDiscounts"],
    },
    getMainInfoAdmin: {
      providesTags: ["MainInfoCompany"],
    },
    patchMainInfoAdmin: {
      invalidatesTags: ["MainInfoCompany"],
    },
    getListOfAvailableMarkupsAdmin: {
      providesTags: ["PartnersMarkups"],
    },
    postOrPutBrandsMarkupAdmin: {
      invalidatesTags: ["PartnersMarkups", "MarkupBrands"],
    },
    postOrPutSubsectionMarkupAdmin: {
      invalidatesTags: ["PartnersMarkups", "MarkupSubsections"],
    },
    getSubsectionMarkupAdmin: {
      providesTags: ["MarkupSubsections"],
    },
    getBrandsMarkupAdmin: {
      providesTags: ["MarkupBrands"],
    },
  },
});

const newsAdminApi = _newsAdminApi.enhanceEndpoints({
  endpoints: {
    deleteNewsAdmin: {
      invalidatesTags: ["NewsFeedList"],
    },
    getAllNewsAdmin: {
      providesTags: ["NewsFeedList"],
    },
  },
});

const usersAdminApi = _usersAdminApi.enhanceEndpoints({});
const bannersAdminApi = _bannersAdminApi.enhanceEndpoints({
  endpoints: {
    getBannersAdmin: {
      providesTags: ["BannersAdminList"],
    },
    deleteBannerAdmin: {
      invalidatesTags: ["BannersAdminList"],
    },
    bannerActivationAdmin: { invalidatesTags: ["BannersAdminList"] },
    postBannerAdmin: {
      invalidatesTags: ["BannersAdminList"],
    },
    putBannerAdmin: {
      invalidatesTags: ["BannersAdminList"],
    },
    upPositionAdmin: {
      invalidatesTags: ["BannersAdminList"],
    },
    downPositionAdmin: {
      invalidatesTags: ["BannersAdminList"],
    },
  },
});
const picturesAdminApi = _picturesAdminApi.enhanceEndpoints({});

export { partnersAdminApi, newsAdminApi, usersAdminApi, bannersAdminApi, picturesAdminApi };
