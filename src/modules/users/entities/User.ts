import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }
