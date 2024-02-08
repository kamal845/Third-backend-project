import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addbook.args';
import { updateBooksArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRepo: Repository<BookEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    const books = await this.bookRepo.find();
    return books;
  }

  async findBookById(id: number): Promise<BookEntity | undefined> {
    const book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }

  async deleteBook(id: number): Promise<string> {
    await this.bookRepo.delete(id);
    return 'This book has been deleted';
  }

  async addBook(AddBookArgs: AddBookArgs): Promise<string> {
    const book: BookEntity = new BookEntity();
    book.title = AddBookArgs.title;
    book.price = String(AddBookArgs.price);
    await this.bookRepo.save(book);
    return 'book has been created successfully';
  }

  async updateBook(updateBooksArgs: updateBooksArgs): Promise<string> {
    const book: BookEntity | undefined = await this.bookRepo.findOne({
      where: { id: updateBooksArgs.id },
    });

    if (book) {
      book.title = updateBooksArgs.title;
      book.price = String(updateBooksArgs.price);

      await this.bookRepo.save(book);
      return 'Book has been successfully updated';
    } else {
      return 'not found';
    }
  }
}
