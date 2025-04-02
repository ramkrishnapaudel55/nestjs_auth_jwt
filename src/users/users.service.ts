import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(username: string, email: string, password: string): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = {
      id: this.users.length + 1,
      username,
      email,
      password: hashedPassword,
    };

    this.users.push(user);
    return user;
  }
}