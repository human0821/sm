import { ErrorBoundary } from "react-error-boundary";
import { useOutlet } from "react-router-dom";

import { TitleWithTabsLayout } from "@/shared/ui/TitleWithTabsLayout";
import { fallbackRender } from "@/shared/utils/fallbackRender";

import { systemNavigate } from "../systemNavigation";

export function SystemLayout() {
  return (
    <>
      <TitleWithTabsLayout title="Администрирование системы" tabs={systemNavigate} />
      <ErrorBoundary fallbackRender={fallbackRender}>{useOutlet()}</ErrorBoundary>
    </>
  );
}
