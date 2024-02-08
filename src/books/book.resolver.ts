import { Resolver } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { AddBookArgs } from './args/addbook.args';
import { updateBooksArgs } from './args/updatebook.args'; // Corrected the import

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  async getAllBooks() {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { name: 'bookById' })
  async getBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBook' })
  async deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  async addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  async updateBook(@Args('updateBookArgs') updateBookArgs: updateBooksArgs) { // Corrected the type name
    return this.bookService.updateBook(updateBookArgs);
  }
}
