import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {

    

    return this.appService.sendMail({
      to: 'william@thedigitalacademy.co.za', 
      subject: 'Json', 
      text: "world?", 
      html: "<b style='color:red'>Hello world?</b>", 
    });
  }
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

  
}
