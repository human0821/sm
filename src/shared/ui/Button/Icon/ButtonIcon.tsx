import { motionFadeFlex } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { Button, IconWrapper } from "./ButtonIcon.styled";

export const ButtonIcon = ({ children, fullColor, onClick, loader, className }: ButtonIcon) => {
  return (
    <Button fullColor={fullColor} onClick={onClick} disabled={loader} className={className} type="button">
      {loader ? (
        <IconWrapper {...motionFadeFlex} key="loader">
          <Loader size={24} />
        </IconWrapper>
      ) : (
        <IconWrapper {...motionFadeFlex} key="icon">
          {children}
        </IconWrapper>
      )}
    </Button>
  );
};
