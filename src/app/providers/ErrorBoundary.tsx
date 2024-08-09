import { InternalServerErrorPage } from "@/pages/internal-server-error";

export function ErrorBoundaryRouter() {
  //const error = useRouteError();
  return <InternalServerErrorPage />;
}
