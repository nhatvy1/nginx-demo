import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { config } from './configs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { LoginModule } from './modules/login/login.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongodb.mongo_uri'),
        maxPoolSize: 5,
        connectionFactory: (connection) => {
          const mongoLogger = new Logger('DATABASE')
          connection.on('connected', () => {
            mongoLogger.verbose('Connected to database successfully')
          })
          connection._events.connected()
          return connection
        }
      })
    }),
    LoginModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
