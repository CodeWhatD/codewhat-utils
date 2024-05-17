export type SingleEle = {
  label: string;
  prop: string;
};

export type Elements = SingleEle[];

export type Line = [string, string, string?];

export type ErrorColumn =
  | string
  | {
      label: string;
      fmt: string;
    };
