import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { AllExceptionsFilter } from './interceptors/all-exception.filter'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const reflector = app.get(Reflector)

  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  app.useGlobalInterceptors(new TransformInterceptor(reflector))
  app.useGlobalFilters(new AllExceptionsFilter())

  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')

  await app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
}
bootstrap()
