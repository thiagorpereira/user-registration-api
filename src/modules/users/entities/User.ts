import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  birth_date: Date;

  @Column()
  avatar: string;

  @Expose({ name: "avatar_url" })
  avatar_url(): string {
    console.log('chegou1')
    switch (process.env.DISK) {
      case "local":
        console.log('chegou3')
        return `${process.env.APP_API_URL}/avatar/${this.avatar}`
      case "s3":
        console.log('chegou2')
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`;
      default:
        null
    }
    
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }
