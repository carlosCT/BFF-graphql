
import { AppService } from './app.service.js';
import { Controller, Post, Body, Logger } from '@nestjs/common';
import { PortFolioDto } from './dto/app.dto.js';

@Controller('graphql')
export class AppController {

  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger('AppController');

  @Post()  
  async getGraphqlData(@Body() body: PortFolioDto) {  
     let {id} = body;
    const result =await this.appService.getPortfolioClientById(id);
    this.logger.log(result);
    return result;
  }
}
