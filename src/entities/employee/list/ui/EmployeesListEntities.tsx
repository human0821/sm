import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { BlockEmptyEntity } from "@/entities/block";
import { EmployeeCard } from "@/entities/employee/card";
import { motionFade } from "@/shared/consts/motion";

import { ListWrapper, EmptyWrapper, ListCardsWrapper } from "./EmployeesListEntities.styled";

export const EmployeesListEntities = ({ items, isEditCards }: EmployeesList) => {
  const { search } = useLocation();

  return (
    <ListWrapper>
      {items.length > 0 ? (
        <motion.div {...motionFade} key="content">
          <ListCardsWrapper>
            {items.map((item) => (
              <EmployeeCard key={item.id} data={item} isEdit={isEditCards} />
            ))}
          </ListCardsWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="empty">
          <EmptyWrapper>
            <BlockEmptyEntity
              size="h1"
              title={search.length > 0 ? "Поиск не дал результатов" : "У вас пока нет сотрудников"}
            />
          </EmptyWrapper>
        </motion.div>
      )}
    </ListWrapper>
  );
};
