import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe<T> implements PipeTransform<T, Promise<T>> {
  async transform(value: T, { metatype }: ArgumentMetadata): Promise<T> {
    if (!metatype || !this.toValidate(metatype)) return value;

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    console.log(errors);

    if (errors.length) throw new BadRequestException('Validation failed');

    return value;
  }

  private toValidate(metatype): boolean {
    return ![String, Boolean, Number, Array, Object].includes(metatype);
  }
}
