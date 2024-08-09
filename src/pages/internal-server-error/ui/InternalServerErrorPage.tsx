import { Helmet } from "react-helmet-async";

import { ErrorBox } from "@/widgets/error-box";
import { Error } from "@/widgets/error-box/consts";

const { 500: error } = Error;

export function InternalServerErrorPage() {
  return (
    <>
      <Helmet>
        <title>{error.title}</title>
      </Helmet>
      <ErrorBox code={500} title={error.title} desc={error.desc} />
    </>
  );
}
