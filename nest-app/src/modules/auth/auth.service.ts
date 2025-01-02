import { ConflictException, Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { RegisterDto } from './dto/register.dto'
import { Hash } from 'src/utils/hash'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(body: RegisterDto) {
    const user = await this.userService.findUserByEmail(body.email)
    if (user) {
      throw new ConflictException('Email already in use')
    }

    const salt = await Hash.generateSalt()
    const hashPassword = await Hash.generatePassword(body.password, salt)

    const createUser = await this.userService.createUser({
      ...body,
      salt,
      password: hashPassword
    })

    return createUser
  }

  async login() {
    return await this.userService.getUserDemo()
  }
}
