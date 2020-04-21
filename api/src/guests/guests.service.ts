import { Injectable } from '@nestjs/common';
import { GuestEntity } from './guests.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GuestsService extends TypeOrmCrudService<GuestEntity> {
    constructor(@InjectRepository(GuestEntity) repository: Repository<GuestEntity>) {
      super(repository);
    }
  }
