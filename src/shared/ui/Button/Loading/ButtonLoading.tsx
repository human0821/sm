import type { ButtonLoadingComponent } from "./types";

import { Loader, ButtonLoading as Button } from "./ButtonLoading.styled";

export function ButtonLoading(props: ButtonLoadingComponent) {
  const startIcon = props.startIcon ? props.loading ? <Loader /> : props.startIcon : undefined;
  const endIcon = props.endIcon ? props.loading ? <Loader /> : props.endIcon : null;
  const children = startIcon || endIcon ? props.children : props.loading ? <Loader /> : props.children;

  return (
    <Button
      {...props}
      // https://stackoverflow.com/a/50752064
      loading={Number(props.loading || 0)}
      startIcon={startIcon}
      endIcon={endIcon}>
      {children}
    </Button>
  );
}
