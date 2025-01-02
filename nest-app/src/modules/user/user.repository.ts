import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOneOptions, Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findOne(options: FindOneOptions<User>) {
    return await this.userRepository.findOne(options)
  }

  async findById(id: number) {
    return await this.userRepository.findOneBy({ id })
  }

  async create(data: any) {
    return await this.userRepository.save(data)
  }

  async getUser() {
    return await this.userRepository.findOneBy({ id: 1 })
  }
}
