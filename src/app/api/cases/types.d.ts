declare namespace CasesApi {
  export interface CasesResponse {
    paidAmount: number;
    dateImmunity: string | null;
    caseSegment: {
      privileges: Record<number, string> | null;
      id: string;
      name: string;
      analyzedPeriodStart: string;
      analyzedPeriodEnd: string;
      amountGt: number | null;
      amountLt: number | null;
      children: null | {
        name: string;
      };
    };
  }
}
