import { Helmet } from "react-helmet-async";

import { ErrorBox } from "@/widgets/error-box";
import { Error } from "@/widgets/error-box/consts";

const { 404: error } = Error;

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{error.title}</title>
      </Helmet>
      <ErrorBox code={404} title={error.title} desc={error.desc} />
    </>
  );
}
