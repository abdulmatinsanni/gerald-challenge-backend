import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public fullName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public phoneNumber: string;

  @IsString()
  public password: string;

  @IsString()
  @IsOptional()
  public otp: string;
}

export class VerifyOtpDto {
  @IsString()
  @IsOptional()
  public phoneNumber: string;

  @IsString()
  public otp: string;
}
