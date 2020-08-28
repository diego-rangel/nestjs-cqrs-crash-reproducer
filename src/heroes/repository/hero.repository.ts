import { Injectable } from '@nestjs/common';

import { Hero } from '../models/hero.model';
import { UowService } from '../services/uow.service';
import { userHero } from './fixtures/user';

@Injectable()
export class HeroRepository {
  constructor(public readonly uow: UowService){}

  async findOneById(id: number): Promise<Hero> {
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }
}
