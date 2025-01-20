import { FactoryProvider, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Redis } from 'ioredis'
import { REDIS_CLIENT } from './redis.constant'

export const redisClientFactory: FactoryProvider<Redis> = {
  provide: REDIS_CLIENT,
  useFactory: (configService: ConfigService) => {
    const redisInstance = new Redis({
      host: configService.get<string>('REDIS.HOST'),
      port: +configService.get<string>('REDIS.PORT')
    })

    const logger = new Logger('RedisModule')

    redisInstance.on('connect', () => {
      logger.verbose('Redis connection established successfully')
    })

    redisInstance.on('error', (e) => {
      throw new Error(`Redis connection failed: ${e}`)
    })

    return redisInstance
  },
  inject: [ConfigService]
}
