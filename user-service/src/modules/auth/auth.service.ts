import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { RegisterDto } from './dto/register.dto'
import { Hash } from 'src/utils/hash'
import { UserRepository } from '../user/user.repository'
import { plainToInstance } from 'class-transformer'
import { User } from '../user/user.entity'
import { LoginDto } from './dto/login.dto'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async register(body: RegisterDto) {
    const user = await this.userRepository.findOne({
      where: { email: body.email }
    })
    if (user) {
      throw new ConflictException('Email already in use')
    }

    const salt = await Hash.generateSalt()
    const hashPassword = await Hash.generatePassword(body.password, salt)

    const dataCreate = plainToInstance(User, {
      ...body,
      salt: salt,
      password: hashPassword
    })

    const createUser = await this.userRepository.create(dataCreate)

    const { password, ...response } = createUser

    return response
  }

  async login(body: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: body.email }
    })
    if (!user) {
      throw new NotFoundException('Email or password incorrect')
    }

    const isMatch = await Hash.verify(body.password, user.password)
    if (!isMatch) {
      throw new NotFoundException('Email or password incorrect')
    }

    /*
      Device session 
    */
    return 1
  }
}
