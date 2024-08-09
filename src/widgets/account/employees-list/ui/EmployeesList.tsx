import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import { useGetEmployeesQuery } from "@/app/api/employees/api";
import { EmployeesListEntities } from "@/entities/employee/list";
import { Pagination } from "@/entities/pagination";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { LoaderWrapper, LayoutWrapper, PaginationWrapper } from "./EmployeesList.styled";

export const EmployeesList = () => {
  const { search } = useLocation();
  const getEmployees = useGetEmployeesQuery(search.length ? `${search}&size=6` : "?size=6");
  const [employees, setEmployees] = useState<EmployeesApi.EmployeeItem[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (getEmployees.data) {
      const { items, pages } = getEmployees.data as Api.ResponseWithPagePaginate<EmployeesApi.EmployeeItem>;
      setEmployees(items);
      setPageCount(pages);
    }
    if (getEmployees.error) {
      showBoundary({ code: 500 });
    }
  }, [getEmployees]);

  useEffect(() => {
    if (search.length === 0) {
      getEmployees.refetch();
    }
  }, [search]);

  return (
    <LayoutWrapper>
      {getEmployees.isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <EmployeesListEntities items={employees} isEditCards />
          <Stack sx={{ marginTop: "40px" }}>
            <PaginationWrapper>
              <Pagination count={pageCount} position="center" />
            </PaginationWrapper>
          </Stack>
        </motion.div>
      )}
    </LayoutWrapper>
  );
};
