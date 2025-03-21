import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'cat',
      autoLoadEntities: true,
      synchronize: true, // Keep false in production
      entities: ['dist/**/*.entity.js'], // Ensure paths match compiled JS files
      migrations: ['dist/migrations/*.js'], // Adjust paths for compiled migrations
    }),
    CatsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
