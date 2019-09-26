import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  UpdateResult,
  InsertResult,
  DeleteResult
} from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async create(user): Promise<InsertResult> {
    return await this.userRepository.insert(user);
  }

  async updateById(id: string, user): Promise<UpdateResult> {
    return await this.userRepository.update(id, user);
  }

  async removeById(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}