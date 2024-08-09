import type { FieldMiniPercent as FieldMiniPercentType } from "../types";

import { Stack, Typography } from "@mui/material";
import { forwardRef } from "react";

import { FIELDS } from "@/shared/consts/fields";
import { DiscountsSellersEditDiscount } from "@/widgets/account/discounts-sellers/ui/DiscountsSellers.styles";

export const FieldMiniPercent = forwardRef(
  ({ props, onChange, validate = FIELDS.markupPrice.flyValidation, isGlows = false }: FieldMiniPercentType, ref) => {
    return (
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <DiscountsSellersEditDiscount
          {...props}
          inputRef={ref}
          InputProps={{
            sx: (theme) =>
              isGlows
                ? {
                    backgroundColor: theme.palette.background.paper,
                  }
                : {},
          }}
          onChange={(x) => {
            if (!validate.validate(x.target.value).error) {
              onChange(x, { value: x.target.value.length === 0 ? "" : Math.max(+x.target.value, 1), id: props.id || "" });
            }
          }}
        />
        <Typography variant="gray">%</Typography>
      </Stack>
    );
  },
);
