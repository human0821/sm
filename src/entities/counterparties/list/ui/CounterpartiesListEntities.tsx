import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { BlockEmptyEntity } from "@/entities/block";
import { CounterpartyCard } from "@/entities/counterparties/card";
import { motionFade } from "@/shared/consts/motion";

import { ListWrapper, EmptyWrapper, ListCardsWrapper } from "./CounterpartiesListEntities.styled";

export const CounterpartiesListEntities = ({ items }: CounterpartiesList) => {
  const { search } = useLocation();

  return (
    <ListWrapper>
      {items.length > 0 ? (
        <motion.div {...motionFade} key="content">
          <ListCardsWrapper>
            {items.map((item) => (
              <CounterpartyCard key={item.id} {...item} />
            ))}
          </ListCardsWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="empty">
          <EmptyWrapper>
            <BlockEmptyEntity
              size="h1"
              title={search.length > 0 ? "Поиск не дал результатов" : "У вас пока нет контрагентов"}
            />
          </EmptyWrapper>
        </motion.div>
      )}
    </ListWrapper>
  );
};
