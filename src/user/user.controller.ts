import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { userDTO } from './user.dto';
import { UpdateResult, InsertResult, DeleteResult } from 'typeorm';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  finById(@Param() params): Promise<User> {
    return this.userService.findById(params.id);
  }

  @Put(':id')
  update(
    @Body() user: userDTO,
    @Param() params
  ): Promise<UpdateResult> {
    return this.userService.updateById(params.id, user);
  }

  @Post()
  create(@Body() user: userDTO): Promise<InsertResult> {
    return this.userService.create(user);
  }

  @Delete(':id')
  remove(@Param() params): Promise<DeleteResult> {
    return this.userService.removeById(params.id);
  }
}