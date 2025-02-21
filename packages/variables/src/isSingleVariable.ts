import type { VariableString } from "./schemas";

export const isSingleVariable = (
  value: string | undefined,
): value is VariableString =>
  !!value &&
  value.startsWith("{{") &&
  value.endsWith("}}") &&
  value.split("{{").length === 2;
