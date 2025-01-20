import { IConfigProps } from './config.interface'

export const config = (): IConfigProps => ({
  port: +process.env.PORT
})
