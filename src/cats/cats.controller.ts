import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ForbiddenException } from 'src/forbidden.exception';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    throw new ForbiddenException();

    return `This action adds a new cat: # ${createCatDto.name}`;
  }

  @Get()
  findAll(): string {
    throw new ForbiddenException();

    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat: # ${updateCatDto.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This actions removes a #${id} cat`;
  }
}
