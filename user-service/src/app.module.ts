import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { LoggerModule } from './logger/logger.module'
import { LoggerMiddleware } from './middleware/logger.middleware'
import configuration from './configs/configuration'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { LogServiceModule } from './modules/log-service/log-service.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig
    }),
    LogServiceModule,
    LoggerModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
