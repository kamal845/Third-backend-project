
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    type?: Nullable<string>;
    title: string;
    price: number;
}

export interface UpdateBooksArgs {
    id: number;
    title?: Nullable<string>;
    price: number;
}

export interface Book {
    id: number;
    type?: Nullable<string>;
    title?: Nullable<string>;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Book | Promise<Book>;
}

export interface IMutation {
    deleteBook(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs: updateBooksArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
