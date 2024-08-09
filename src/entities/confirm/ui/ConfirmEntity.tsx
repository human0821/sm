import { useImperativeHandle, forwardRef, memo, useEffect } from "react";

import { useConfirm } from "@/entities/confirm/hooks/useConfirm";

import { Wrapper, ConfirmBackdrop, ConfirmWrapper, Title, Buttons, OKButton, CancelButton } from "./ConfirmEntity.styled";
import { CONFIRM_TITLE, CONFIRM_OK, CONFIRM_CANCEL } from "../consts";

const ConfirmEntity = memo(
  forwardRef<Confirm.Ref | null>((props, ref) => {
    const confirmWrapperId = "confirm-wrapper";
    const { state, hide, onOK, onCancel, position, handlers } = useConfirm();

    useImperativeHandle(ref, () => ({
      hide,
      position,
      handlers,
    }));

    useEffect(() => {
      const isConfirmClick = (node: Element, id: string) => {
        const deep = 7;
        let element: Element | null = node;
        let c = 0;
        while (element && c++ < deep) {
          if (element.id.includes(id)) {
            return true;
          }
          element = element.parentElement;
        }
        return false;
      };
      const outerAreaClick = (event: MouseEvent) => {
        const target = event.target as Element;
        if (!isConfirmClick(target, confirmWrapperId)) onCancel();
      };
      if (state.show) {
        // setTimeout allows skip current click
        setTimeout(() => document.body.addEventListener("click", outerAreaClick));
      }
      return () => {
        document.body.removeEventListener("click", outerAreaClick);
      };
    }, [onCancel]);

    return (
      <Wrapper>
        <ConfirmBackdrop show={state.show} />
        <ConfirmWrapper x={state.x} y={state.y} show={state.show} id={confirmWrapperId}>
          <Title>{CONFIRM_TITLE}</Title>
          <Buttons>
            <OKButton variant="contained" onClick={onOK}>
              {CONFIRM_OK}
            </OKButton>
            <CancelButton onClick={onCancel}>{CONFIRM_CANCEL}</CancelButton>
          </Buttons>
        </ConfirmWrapper>
      </Wrapper>
    );
  }),
);
ConfirmEntity.displayName = "ConfirmEntity";
export { ConfirmEntity };
