import { Controller, Get } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

import { HeroKilledDragonEvent } from './events/impl/hero-killed-dragon.event';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly eventBus: EventBus,
  ) {}

  @Get()
  async index(): Promise<any> {
    //publishes an event which throws an exceptions and craches the app
    return this.eventBus.publish(new HeroKilledDragonEvent('123', '432'));
  }

  @Get('health')
  async health(): Promise<any> {
    return 'ok';
  }
}
