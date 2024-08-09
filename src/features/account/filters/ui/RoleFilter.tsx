import { motion } from "framer-motion";

import { mediaQueryHelp } from "@/app/styles/functions";
import { Sort } from "@/entities/sort";
import { motionFadeScaleCollapse } from "@/shared/consts/motion";
import { useFetchRoles } from "@/shared/hooks/useFetchRoles";

export const RoleFilter = () => {
  const { roles } = useFetchRoles();

  return (
    <>
      {roles.length > 0 && (
        <motion.div {...motionFadeScaleCollapse("auto")} key="sort">
          <Sort
            options={roles}
            paramName="roles"
            placeholder="Роль"
            multiple
            sx={{
              ...mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1rem", l: "1.125rem" } }),
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          />
        </motion.div>
      )}
    </>
  );
};
