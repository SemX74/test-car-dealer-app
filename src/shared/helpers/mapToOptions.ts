import { ReactNode } from "react";
import { SelectOption } from "../types";

type StringValueKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type MapToOptionsProps<T> = {
  arr: T[] | undefined;
} & (
  | { labelKey: StringValueKeys<T>; labelFn?: never; idKey: keyof T }
  | {
      labelKey?: never;
      labelFn: (object: T) => string | ReactNode;
      idKey: keyof T;
    }
);

export const mapToOptions = <T>({
  arr = [],
  idKey,
  labelKey,
  labelFn,
}: MapToOptionsProps<T>): SelectOption<string>[] => {
  return arr.map((entry) => {
    const label = labelFn ? labelFn(entry) : String(entry[labelKey]);
    const value = String(entry[idKey]);
    return {
      label,
      value,
    } as SelectOption<string>;
  });
};
