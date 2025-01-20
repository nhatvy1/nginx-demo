import { Global, Module } from '@nestjs/common'
import { redisClientFactory } from './redis.client.factory'
import { RedisRepository } from './redis.repository'
import { REDIS_CLIENT } from './redis.constant'

@Global()
@Module({
  providers: [redisClientFactory, RedisRepository],
  exports: [RedisRepository, REDIS_CLIENT]
})
export class RedisModule {}
