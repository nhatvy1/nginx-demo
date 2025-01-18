import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { AllExceptionsFilter } from './interceptors/all-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const reflector = app.get(Reflector)

  app.setGlobalPrefix('api')
  
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  app.useGlobalInterceptors(new TransformInterceptor(reflector))
  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen(process.env.PORT ?? 5000)
  
  console.log(`App is running port 5000`)
}
bootstrap()
