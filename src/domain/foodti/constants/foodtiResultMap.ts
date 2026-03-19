export const FOODTI_RESULT_MAP = {
  1: "SMRB",
  2: "SMRD",
  3: "SMNB",
  4: "SMND",
  5: "SVRB",
  6: "SVRD",
  7: "SVNB",
  8: "SVND",
  9: "PMRB",
  10: "PMRD",
  11: "PMNB",
  12: "PMND",
  13: "PVRB",
  14: "PVRD",
  15: "PVNB",
  16: "PVND",
} as const;

export type FoodtiCode = keyof typeof FOODTI_RESULT_MAP
