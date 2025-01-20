import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post
} from '@nestjs/common'
import { RegisterDto } from './dto/register.dto'
import { AuthService } from './auth.service'
import { ResponseMessage } from 'src/decorators/reponse-message.decorator'
import { LoginDto } from './dto/login.dto'
import { ClientProxy } from '@nestjs/microservices'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject('LOG_SERVICE') private readonly logServiceClient: ClientProxy
  ) {}

  @Get('login')
  async login(@Body() body: LoginDto) {
    return await this.authService.login(body)
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ResponseMessage('Register successfully')
  async register(@Body() body: RegisterDto) {
    return await this.authService.register(body)
  }

  @Get('test/winston')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Test winston')
  async testWinston() {
    this.logServiceClient.emit(
      { cmd: 'create' },
      {
        price: '12000',
        productId: 1,
        phone: '0312999777',
        email: 'demo@gmail.com'
      }
    )
    return 'success'
  }
}
