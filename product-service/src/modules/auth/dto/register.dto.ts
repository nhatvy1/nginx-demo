import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
