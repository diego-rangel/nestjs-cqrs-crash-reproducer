import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { EventHandlers } from './events/handlers';
import { HeroesGameController } from './heroes.controller';
import { HeroRepository } from './repository/hero.repository';
import { UowService } from './services/uow.service';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    UowService,
    HeroRepository,
    ...EventHandlers,
  ],
})
export class HeroesGameModule {}
