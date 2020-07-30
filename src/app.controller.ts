import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}
  /**
   * 
   *   to,subject,text,html
   * 
   * @param message_body 
   */
  @Post()
  sendMail(@Body() message_body)
  {
    return this.appService.sendMail(message_body);
  }

  @Get()
  getData()
  {
    return 'its woeking';
  }

  
}
