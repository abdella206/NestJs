import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService ) {

    }

    @Get()
    getUser(): User[] {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): User { // TODO: auto parse ID
        
        return this.userService.findId(Number(id));
    }

    @Post()
    createUser(@Body()body: CreateUserDto) : User {
        return this.userService.createUser(body);
    }

   

}
