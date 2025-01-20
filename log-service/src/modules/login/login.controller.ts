import { Controller } from '@nestjs/common'
import { LoginService } from './login.service'
import { EventPattern } from '@nestjs/microservices'

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @EventPattern({ cmd: 'create' })
  async createLogin(data: any) {
    console.log(data)
    await this.loginService.create('Login 12h')
  }
}
