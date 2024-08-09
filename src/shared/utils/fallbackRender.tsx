import { type FallbackProps } from "react-error-boundary";

import { ErrorBox } from "@/widgets/error-box";

export function fallbackRender(this: boolean, error: FallbackProps) {
  return (
    <ErrorBox
      code={error.error.code || 500}
      title={error.error.title}
      desc={error.error.desc}
      reset={typeof this === "boolean" ? this : false}
    />
  );
}
