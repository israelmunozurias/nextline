import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { RegisterDto } from "./dto/register.dto";

import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register({ name, email, user, password }: RegisterDto) {
    const users = await this.usersService.findOneByUser(user);

    if (users) {
      throw new BadRequestException("User already exists");
    }

    await this.usersService.create({
      name,
      email,
      user,
      password: await bcryptjs.hash(password, 10),
    });

    return {
      name,
      email,
      user,
    };
  }

  async login({ user, password }: LoginDto) {
    const users = await this.usersService.findByUserWithPassword(user);
    if (!users) {
      throw new UnauthorizedException("user is wrong");
    }

    const isPasswordValid = await bcryptjs.compare(password, users.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("password is wrong");
    }

    const payload = { user: users.user, role: users.role };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      user,
    };
  }
}
