import { IConfigProps } from './config.interface'

export const config = (): IConfigProps => ({
  port: +process.env.PORT,
  mongodb: {
    mongo_uri: process.env.MONGO_URI
  }
})
