export type TResult<T> = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T;
};

export type SelectOption<T> = {
  label: string;
  value: T;
};
