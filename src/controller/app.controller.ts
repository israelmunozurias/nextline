import { Controller, Get, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from "../services/app.service";
import { DTO } from "src/dto";
import { ApiResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* @Auth({ßå
    possession: AppPossession.ANY,
    action: AppActions.READ,ç
    resource: RaffleResources.RAFFLE,
  }) */
  @Get(":id")
  @UsePipes(ValidationPipe)
  @ApiResponse({ type: DTO.RegisterDTO, status: 200 })
  getHello(): string {
    return this.appService.getHello();
  }
}
