import { ConfigService } from '@nestjs/config'
import * as winston from 'winston'
import 'winston-daily-rotate-file'

export const createLogger = (configService: ConfigService) => {
  const logFileInfo = configService.get<string>('LOG.FILE_LOG_NAME_INFO')
  const logFileErr = configService.get<string>('LOG.FILE_LOG_NAME_ERR')
  const transports: winston.transport[] = [
    new winston.transports.DailyRotateFile({
      filename: `${logFileInfo}-%DATE%.log`,
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '4m',
      maxFiles: '14d',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    }),
    new winston.transports.DailyRotateFile({
      filename: `${logFileErr}-%DATE%.log`,
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '4m',
      maxFiles: '14d',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  ]
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: transports
  })
}
