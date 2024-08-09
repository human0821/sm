import type { BrandMarkupSchema, SectionMarkupSchema } from "@/app/api/apiGenerator/admin/partnersAdminApi";
import type { FinResultMarkup } from "@/entities/product/types";
import type { FinResultTabs } from "@/widgets/account/result-find-brands/ui/const";

import { createSlice } from "@reduxjs/toolkit";

export const finResultSlice = createSlice({
  name: "finResult",
  initialState: {
    sections: [] as (SectionMarkupSchema & FinResultMarkup)[],
    tab: "byGroup" as FinResultTabs,
    isDirty: false,
    changedIds: [] as string[],
  },
  reducers: {
    setSections(
      state,
      { payload }: P<{ sections: ((SectionMarkupSchema | BrandMarkupSchema) & FinResultMarkup)[]; filtered?: boolean }>,
    ) {
      const _sections = structuredClone(payload.sections).filter(Boolean);

      _sections.forEach((s) => {
        // @ts-ignore расхождение на беке
        const subSections: SubSectionMarkupSchema[] = s.subSections || s.sub_sections;
        subSections?.forEach((b) => {
          b.markup = b.markup || "";
        });
        if (payload.filtered) {
          s.markup = "*";
        } else
          s.markup = s.markup
            ? s.markup
            : // @ts-ignore
              subSections?.reduce((a, c) => (c.markup === a ? c.markup : "*"), subSections[0]?.markup || "");
      });

      state.sections = _sections;
    },
    setTab(state, { payload: tab }: P<FinResultTabs>) {
      state.tab = tab;
    },
    setDirty(state, { payload }: P<boolean>) {
      state.isDirty = payload;
    },
    setChangedIds(state, { payload }: P<string[]>) {
      state.changedIds = payload;
    },
  },
});

export const finResultActions = finResultSlice.actions;
export default finResultSlice.reducer;
