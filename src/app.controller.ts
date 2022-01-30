import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// HTTP request를 직접 받아 처리하는 부분
@Controller('cats') // cats route 생성
export class AppController {
  constructor(private readonly appService: AppService) {}

  // method 위에 http method를 decorater로 붙여서 사용
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
