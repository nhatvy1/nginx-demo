import { Inject, Injectable } from '@nestjs/common'
import { REDIS_CLIENT } from './redis.constant'
import { Redis } from 'ioredis'

@Injectable()
export class RedisRepository {
  constructor(@Inject(REDIS_CLIENT) private readonly redisClient: Redis) {}

  async set(
    key: string,
    value: string,
    expiryInSecond?: number
  ): Promise<string> {
    if (expiryInSecond) {
      return await this.redisClient.set(key, value, 'EX', expiryInSecond)
    }
    return await this.redisClient.set(key, value)
  }

  async get(key: string): Promise<string | null> {
    return await this.redisClient.get(key)
  }

  async delete(key: string): Promise<number> {
    return await this.redisClient.del(key)
  }

  async publish(chanel: string, message: string): Promise<number> {
    return await this.redisClient.publish(chanel, message)
  }

  async subscribe(
    chanel: string,
    callback: (message: string) => void
  ): Promise<void> {
    this.redisClient.subscribe(chanel)
    this.redisClient.on('message', (ch, message) => {
      if (ch === chanel) {
        callback(message)
      }
    })
  }

  async quit(): Promise<void> {
    await this.redisClient.quit()
  }
}
