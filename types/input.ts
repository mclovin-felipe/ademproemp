export interface Inputs {
  name: string;
  placeholder: string;
  rules: rulesInterface;
  noVisible?: boolean;
  title: string;
}

export interface rulesInterface {
  [key: string]: {
    value: any;
    message: string;
  };
}
