import { Button, Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { EditIcon } from "@/assets/icons";
import { FaqDeleteButton } from "@/features/faq/faq-delete-button";
import { AccordionArrow } from "@/shared/ui/AccordionArrow";
import { Flex } from "@/shared/ui/Flex";

import { ButtonsWrapper, Answer, Question } from "./FaqItem.styled";

export const FaqItem = ({ question, answer, isEdit, id }: FacItem) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Accordion expanded={expanded} className="outlined">
      <AccordionSummary sx={{ cursor: "default !important" }}>
        <Flex
          sx={{ cursor: "pointer", justifyContent: "space-between", width: "100%" }}
          onClick={() => setExpanded(!expanded)}>
          <Question>{question}</Question>
          <AccordionArrow isExpanded={expanded} />
        </Flex>
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={mediaQueryHelp({ gap: { xs: "10px", s: "20px" } })}>
          <Answer>{answer}</Answer>
          {isEdit && (
            <ButtonsWrapper>
              <Button
                startIcon={<EditIcon style={{ width: 24, height: 24, marginRight: 2 }} />}
                sx={{ padding: "5px 20px !important" }}
                color="secondary"
                size="large"
                onClick={() => navigate(`${Routes.FAQ_PAGE}/${id}`)}>
                Редактировать
              </Button>
              <FaqDeleteButton id={id} />
            </ButtonsWrapper>
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
