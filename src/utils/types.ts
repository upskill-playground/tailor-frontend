export type formikHelper = {
  otpDigit1: string;
  otpDigit2: string;
  otpDigit3: string;
  otpDigit4: string;
  otpDigit5: string;
  otpDigit6: string;
};

export type formikLoginHelper = {
  email: string;
};

export type ProfileFormHelper = {
  name: string;
  email: string;
  role: string;
};

export type User = {
  createdAt: number;
  email: string;
  id: string;
  name: string;
  organizationId: string;
  permissions: any[];
  role: string;
  updatedAt: number;
};
