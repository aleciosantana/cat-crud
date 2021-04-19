import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CastModule } from './cats/cats.module';

@Module({
  imports: [CastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
