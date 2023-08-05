export interface TextProps {
  children: React.ReactNode;
  type: string;
  fontSize?: string;
  color?: string;
  mt?: string;
  align?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  width?: string;
  mt?: string;
  isDisabled?: boolean;
}

export interface FormLabelProps {
  children: React.ReactNode;
  color?: string;
}

export interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  max?: number;
  minimum?: number;
  maximum?: number;
  classText?: string;
}
