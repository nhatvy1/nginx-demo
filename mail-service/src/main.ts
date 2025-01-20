import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Transport } from '@nestjs/microservices'
import { AllExceptionsFilter } from './filters/all-exception.filter'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 5002
    }
  })
  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen()
  console.log(`App is running 5001`)
}
bootstrap()
