import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { plainToClass, plainToInstance } from 'class-transformer'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email
      }
    })
  }

  async createUser(data: any) {
    const dataCreate = plainToInstance(User, data)
    return await this.userRepository.create(dataCreate)
  }

  async getUserDemo() {
    return await this.userRepository.getUser()
  }
}
