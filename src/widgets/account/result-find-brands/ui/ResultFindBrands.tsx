import { Box, Button, Tab, Tabs } from "@mui/material";

import { useAppSelector } from "@/app/store";
import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { ModalDialogTypes } from "@/entities/modal";
import { ProductAccordionPercentEntity } from "@/entities/product";
import { useActions } from "@/shared/hooks/useActions";
import { Loader } from "@/shared/ui/Button";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

import { FinResultTabs } from "./const";
import { FinResultTabsWrap, ResultFindBrandsWrap } from "./ResultFindBrands.styled";
import { useResultFindBrands } from "../hooks/useResultFindBrands";

export function ResultFindBrands() {
  const hookData = useResultFindBrands(),
    changedIds = useAppSelector((state) => state.finResult.changedIds),
    markup = hookData.markup.data?.markup,
    actions = useActions();

  /** Функция изменения процентов */
  function onChangePercent(x: any, value: { value: number; id: string }) {
    const sections = structuredClone(hookData.sections);
    const parentNode = sections.find((x) => x.id === value.id);

    /** Изменение процентов главной группы */
    if (parentNode) {
      parentNode.markup = value.value;
      parentNode.subSections?.forEach((x) => (x.markup = value.value));
      actions.setChangedIds([...new Set([...changedIds, value.id, ...(parentNode.subSections?.map((x) => x.id) || [])])]);
    } else {
      /** Изменение процентов подгруппы */
      const parentNode = sections.find((x) => x.subSections?.find((x) => x.id === value.id)),
        node = parentNode?.subSections?.find((x) => x.id === value.id);

      if (parentNode && node) {
        node.markup = value.value;
        const isSinglePercent = parentNode?.subSections?.every((x) => x.markup === parentNode?.subSections?.[0]?.markup);
        parentNode.markup = isSinglePercent ? value.value : "*";
        actions.setChangedIds([...new Set([...changedIds, value.id])]);
      }
    }

    actions.setDirty(true);
    actions.setSections({ sections });
  }

  return (
    <ResultFindBrandsWrap>
      <FinResultTabsWrap>
        <Tabs
          value={markup ? hookData.tab : null}
          onChange={(_, value) => {
            hookData.selectedTab.current = value;
            hookData.setShowModal(true);
          }}>
          <Tab disabled={!markup} label="По группам" value={FinResultTabs.BY_GROUP} />
          <Tab disabled={!markup} label="По брендам" value={FinResultTabs.BY_BRAND} />
        </Tabs>
      </FinResultTabsWrap>
      {/* @ts-ignore пока бэк не приведёт к единому стандарту */}
      {hookData.sections?.filter((x) => (x.subSections || x.subsections)?.length).length ? (
        hookData.sections?.map((section) => (
          <ProductAccordionPercentEntity
            disabled={!markup}
            key={section.id}
            items={section}
            onChange={onChangePercent}
            changedIds={hookData.changedIds}
          />
        ))
      ) : hookData.loading ? (
        <Box sx={{ mx: "auto" }}>
          <Loader />
        </Box>
      ) : (
        <InfoEmptyText
          sx={mediaQueryHelp({
            my: { xs: "117px", s: "188px", m: "137px", l: "174px", xl: "130px" },
            fontSize: { xs: "1rem", s: "1.25rem", l: "1.5rem", xxl: "2rem" },
          })}>
          Ничего не найдено
        </InfoEmptyText>
      )}

      <ButtonLoading
        onClick={hookData.onSummit}
        loading={hookData.loading}
        disabled={!markup || !hookData.isDirty}
        variant="contained">
        Сохранить
      </ButtonLoading>

      <CustomDialog
        open={hookData.showModal}
        type={ModalDialogTypes.WARNING}
        onClose={() => hookData.setShowModal(false)}
        onNotConfirm={() => hookData.setShowModal(false)}
        noButtonText="Отмена"
        yesButtonText="Принять"
        onConfirm={() => {
          hookData.setShowModal(false);
          hookData.setTab(hookData.selectedTab.current);
          hookData.params.set("tab", hookData.selectedTab.current);
          hookData.setParams(hookData.params);
          actions.setDirty(false);
          actions.setChangedIds([]);
        }}>
        {hookData.tab === FinResultTabs.BY_GROUP ? "Наценка по группам сбросятся" : "Наценки на виды и бренды сбросятся"}
      </CustomDialog>

      <CustomDialog
        actions={
          <Button variant="contained" onClick={() => hookData.setShowWarningModal(false)}>
            Закрыть
          </Button>
        }
        type={ModalDialogTypes.WARNING}
        open={hookData.showWarningModal}>
        Пожалуйста, установите наценки на все виды номенклатур
      </CustomDialog>
    </ResultFindBrandsWrap>
  );
}
