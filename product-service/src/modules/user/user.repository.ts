import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeepPartial, FindOneOptions, Repository, SaveOptions } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create.user.dto'

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

  async create(entities: CreateUserDto) {
    return await this.userRepository.save(entities)
  }

  async getUser() {
    return await this.userRepository.findOneBy({ id: 1 })
  }
}
