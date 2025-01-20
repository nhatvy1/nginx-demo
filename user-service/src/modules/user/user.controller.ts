import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { ResponseMessage } from 'src/decorators/reponse-message.decorator'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('lists')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('success')
  getUsers() {
    return this.userService.findUsers()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('success')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id)
  }
}
