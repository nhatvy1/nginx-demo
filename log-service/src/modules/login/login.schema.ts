import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema({ timestamps: true })
export class Login {
  @Prop({ type: String, default: '' })
  name: string
}

export type LoginDocument = HydratedDocument<Login>
export const LoginSchema = SchemaFactory.createForClass(Login)