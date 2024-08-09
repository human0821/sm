import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { CounterpartyForm } from "@/widgets/administration/counterparty-form";

import { breadcrumbs } from "../consts/breadcrumbs";

export const CounterpartyCreatePage = () => (
  <>
    <Breadcrumbs items={breadcrumbs} />
    <CounterpartyForm />
  </>
);
