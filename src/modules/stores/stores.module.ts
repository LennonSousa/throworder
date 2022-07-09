import { Module } from '@nestjs/common';
import { StoresController } from './controllers/stores.controller';
import { CreateStoreUseCase } from './useCases/createStoreUseCase/createStoreUseCase';

@Module({
  controllers: [StoresController],
  providers: [CreateStoreUseCase],
})
export class CatsModule {}
