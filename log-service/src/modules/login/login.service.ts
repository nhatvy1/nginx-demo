import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Login } from './login.schema'
import { Model } from 'mongoose'

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Login.name) private readonly loginModel: Model<Login>
  ) {}

  async create(name: string) {
    await this.loginModel.create({ name: name })
  }
}
