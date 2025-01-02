import { Body, Controller, Get, Post } from '@nestjs/common'
import { RegisterDto } from './dto/register.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login() {
    return await this.authService.login()
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body)
  }
}
