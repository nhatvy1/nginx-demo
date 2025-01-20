import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { LoggerModule } from 'src/logger/logger.module'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { MAIL_SERVICE } from './auth.constant'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MAIL_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 5002
        }
      }
    ]),
    UserModule,
    LoggerModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
