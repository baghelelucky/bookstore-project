# Bookstore API

A simple Bookstore REST API built with Node.js and Express.

## Installation

1. Clone the repository:
2. Install dependencies:
3. Run the server:



## API Endpoints

### Public Endpoints:
- `GET /books` → Get all books
- `GET /books/isbn/:isbn` → Get book by ISBN
- `GET /books/author/:author` → Get books by author
- `GET /books/title/:title` → Get books by title
- `GET /books/review/:isbn` → Get book review

### User Endpoints:
- `POST /users/register` → Register new user
- `POST /users/login` → Login user

### Review Endpoints:
- `POST /books/review` → Add or modify book review
- `DELETE /books/review/:isbn` → Delete book review

## Author
Lucky Baghele

**##Run on Server**

node server.js
