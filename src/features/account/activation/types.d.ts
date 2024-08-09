import type { ApiTag } from "@/app/api/index";
import type { ButtonProps } from "@mui/material";
declare global {
  namespace Activation {
    type ApiMutationHook = UseMutation<
      MutationDefinition<
        { id: string | number; body: object },
        (
          args: string | FetchArgs,
          api: BaseQueryApi,
          extraOptions: object,
        ) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>,
        ApiTag,
        EmployeesApi.EmployeeItem | CounterpartiesApi.CounterpartyItem | Api.ResponseError,
        "api"
      >
    >;

    interface Button {
      isActive: boolean;
      id: number | string;
      name: string;
      mutationHook: ApiMutationHook;
      withName?: boolean;
      size?: ButtonProps["size"];
      withResultModal?: boolean;
      activateBodyField?: string;
      setIsActive?: (value: boolean) => void;
      withTag?: boolean;
      forDeactivation?: boolean;
    }

    interface Hook {
      isActive: boolean;
      id: number | string;
      name: string;
      useActivationMutation: ApiMutationHook;
      withResultModal?: boolean;
      activateBodyField?: string;
      setIsActive?: (value: boolean) => void;
      withTag?: boolean;
      forDeactivation?: boolean;
    }

    interface ActionsHook {
      id: number | string;
      withResultModal?: boolean;
      activateBodyField?: string;
      useActivationMutation: ApiMutationHook;
      setIsActive?: (value: boolean) => void;
      setCurrentIsActive: React.Dispatch<React.SetStateAction<boolean>>;
      currentIsActive: boolean;
      name: string;
      withTag?: boolean;
      forDeactivation?: boolean;
      setCurrentForDeactivation: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    }
  }
}
