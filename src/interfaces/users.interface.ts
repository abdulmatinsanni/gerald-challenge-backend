export interface User {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  otp: string;
  otpExpiresAt?: string;
  isVerified?: boolean;
}
