import { Module } from '@nestjs/common'
import { LoggerService } from './logger.service'
import { ConfigService } from '@nestjs/config'
import { createLogger } from './winston.config'

@Module({
  providers: [
    LoggerService,
    {
      provide: 'LOGGER',
      useFactory: (configService: ConfigService) => createLogger(configService),
      inject: [ConfigService]
    },
  ],
  exports: [LoggerService]
})
export class LoggerModule {}
