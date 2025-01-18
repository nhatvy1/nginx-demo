import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class DeviceSession {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String, unique: true })
  deviceId: string

  @Column({ type: String, nullable: true })
  name: string

  @Column({ type: String, nullable: true })
  ua: string

  @Column({ type: String, nullable: true })
  secretKey: string

  @Column({ type: String, nullable: true })
  refreshToken: string

  @Column({ type: Date, nullable: false })
  expiredAt: Date

  @Column({ type: String, nullable: false })
  ipAddress: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date;
}
