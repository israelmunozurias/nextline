import { Body, Controller, Get, Post } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";

@ApiTags("auth")
@ApiBearerAuth()
@ApiUnauthorizedResponse({
  description: "Unauthorized Bearer Auth",
})
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
