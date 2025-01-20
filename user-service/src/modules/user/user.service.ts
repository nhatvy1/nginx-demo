import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { plainToInstance } from 'class-transformer'
import { User } from './user.entity'
import { RedisRepository } from '../redis/redis.repository'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly redisRepository: RedisRepository
  ) {}

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email
      }
    })
  }

  async findUsers() {
    return await this.userRepository.find()
  }

  async findUserById(id: number) {
    return await this.userRepository.findOne({ where: { id } })
  }

  async createUser(data: any) {
    const dataCreate = plainToInstance(User, data)
    return await this.userRepository.create(dataCreate)
  }
}
