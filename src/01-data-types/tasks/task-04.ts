/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  category: string;
  isAvailable: boolean;
};

const books: Book[] = [
  {
    isbn: "978-0-13-468599-1",
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    category: "Programming",
    isAvailable: true,
  },
  {
    isbn: "978-0-14-143951-8",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 432,
    category: "Fiction",
    isAvailable: false,
  },
  {
    isbn: "978-0-06-231609-7",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 443,
    category: "History",
    isAvailable: true,
  },
];

console.log(books);