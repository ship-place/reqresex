import { Injectable, PipeTransform } from '@nestjs/common';
import { decode } from 'jsonwebtoken';

@Injectable()
export class GetJwtPayloadParameterPipe implements PipeTransform {
  private parametrName: string;

  constructor(parametrName: string) {
    this.parametrName = parametrName;
  }

  transform(value: any, _) {
    try {
      return decode(value)[this.parametrName];
    } catch {
      return '';
    }
  }
}
