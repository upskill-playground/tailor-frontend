import { ProfileFormHelper } from "../../utils/types";

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
  isDisabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SideModalProps {
  children: React.ReactNode;
  title?: string;
  position?: string;
  opacity?: string;
  handleClose: () => void;
}

export interface MobileProps {
  show?: boolean;
  handleClose: () => void;
}

interface Metrics {
  title: string;
  amount: number;
  metric?: string;
  percentage?: number;
}
export interface MetricsCardProps {
  content: Metrics;
}

export interface TitleProps {
  title?: string;
  handleChange?: () => void;
  onOpen?: () => void;
  placeholder?: string;
  btn?: string;
  isLink?: boolean;
}

export interface ViewCustomerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface JobCards {
  title: string;
  description: string;
  due_date: string;
  priority: string;
  assigned_to: string;
}

export interface JobCardProps {
  content: JobCards;
}

export interface TableProps {
  onOpen: () => void;
}

export interface ProfileFormProps {
  show: boolean;
  onClose: () => void;
  content?: ProfileFormHelper;
  isEdit?: boolean;
}

export interface loginSagaHelper {
  email: string;
}

export interface ValdateOtp {
  email: string;
  otp: string;
}
