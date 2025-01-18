import * as bcrypt from 'bcrypt'

export class Hash {
  static async generatePassword(text: string, salt: any) {
    return bcrypt.hash(text, salt)
  }

  static async generateSalt() {
    const salt = await bcrypt.genSalt(10)
    return salt
  }

  static async verify(plainText: string, hash: string) {
    return await bcrypt.compare(plainText, hash)
  }
}
