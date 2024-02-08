import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [],
  providers: [BookService, BookResolver], // Include AppService in providers
})
export class BookModule {}
