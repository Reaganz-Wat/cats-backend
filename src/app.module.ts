import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345678',
        database: 'cat',
        autoLoadEntities: true,
        synchronize: true, // Disable in production
      }
    ),
  CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
