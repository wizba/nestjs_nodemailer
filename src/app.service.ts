import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
@Injectable()
export class AppService {

  myAccount:any ;
  transporter:any;
  constructor(){
    this.transporter = nodemailer.createTransport({
      service:'gmail',// you can also use other services like outlook
      auth:{
        user:process.env.EMAIL,//replace with your email
        pass:process.env.PASSWORD//replace with your password
      }
    });
  }
  /**
   * 
   * @param email sender's email 
   * this methods is uses transporter from nodemailer to send emails
   * 
   */
  async sendMail(message_body:any){

    let info = await this.transporter.sendMail(message_body);
    
    return info;
  }


  

}
