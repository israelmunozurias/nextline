import { Body, Controller, Get, Post } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

interface RequestWithUser extends Request {
  user: {
    user: string;
    role: string;
  };
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(
    @Body()
    registerDto: RegisterDto
  ) {
    return this.authService.register(registerDto);
  }

  @Post("login")
  login(
    @Body()
    loginDto: LoginDto
  ) {
    return this.authService.login(loginDto);
  }
}
