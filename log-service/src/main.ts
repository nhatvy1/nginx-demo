import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './filters/all-exception.filter'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 5001
      }
    }
  )

  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen()
  console.log(`App is running 5001`)
}
bootstrap()
