import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      msg: 'Welcome to Nginx, Nestjs, Nextjs'
    }
  }
}
