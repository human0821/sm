import type { AccordionChild } from "../types";

export const productListMock: AccordionChild = {
  label: "Гостинные",
  id: "10",
  percent: "*",
  children: [
    {
      label: "Мягкая мебель",
      percent: 15,
      id: "4",
    },
    {
      label: "Малые формы",
      percent: 16,
      id: "3",
    },
    {
      label: "Шкафы",
      percent: 16,
      id: "2",
    },
  ],
};
