import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import { LoggerService } from 'src/logger/logger.service'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, headers, ip } = req
    const userAgent = headers['user-agent']

    const start = Date.now()
    res.on('finish', () => {
      const { statusCode } = res
      const duration = `${Date.now() - start}ms`
      const message = `${method} ${originalUrl}, ${statusCode}, ${Date.now() - start}ms`
      if (statusCode === 404) {
        console.log(1)
        // Ghi vào error log nếu API không tồn tại
        this.logger.error(`Error: ${message}`, message, {
          method,
          statusCode,
          duration,
          ip,
          userAgent,
          device: headers['device'] || 'unknown'
        })
      } else {
        console.log(2)
        this.logger.info('info', {
          method,
          statusCode,
          duration: `${Date.now() - start}ms`,
          ip,
          userAgent
        })
      }
    })
    next()
  }
}
