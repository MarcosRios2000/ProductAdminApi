# Product Manager API (Backend)

A RESTful API for managing products, built with **Express**, **PostgreSQL**, and **TypeScript**.  
This API provides full CRUD functionality for products and has **100% test coverage**.  
It also includes **Swagger** documentation for the available endpoints.

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **PostgreSQL**
- **express-validator** (Validation middleware)
- **Swagger** (API documentation)
- **Jest** (Testing)
- **Supertest** (Integration Testing)
- **dotenv** (Environment variables)

---

## 📦 Environment Variables

Create a `.env` file in the root with the following:

```bash
DATABASE_URL=your_postgres_database_connection
FRONTEND_URL=your_frontend_url
```

---

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start the dev server (with auto-reload)
npm run dev

# Build TypeScript
npm run build

# Start the production server
npm start
```

---

## 🧪 Testing

This project has **100% test coverage**.

```bash
# Run tests
npm run test
```

Coverage reports are generated automatically after running the tests.

---

## 📚 API Documentation

Swagger documentation is available at:

```
/api-docs
```

You can access all the API endpoints, expected request bodies, and responses there.

Example of available endpoints:

| Method | Endpoint               | Description               |
|:------:|:-----------------------:|:--------------------------:|
| GET    | `/api/products`          | Get all products           |
| GET    | `/api/products/:id`       | Get a product by ID         |
| POST   | `/api/products`           | Create a new product        |
| PUT    | `/api/products/:id`       | Update a product            |
| PATCH  | `/api/products/:id`       | Update product availability |
| DELETE | `/api/products/:id`       | Delete a product            |

---

## 📄 Project Structure

```
src/
├── handlers/         # Route handlers (controllers)
├── middleware/       # Custom middleware (e.g., validation handlers)
├── routes/           # Express route definitions
├── db.ts             # Database connection setup
├── index.ts          # App entry point
├── types/            # TypeScript interfaces and types
└── tests/            # Test suites for endpoints
```

---

## 🔥 Features

- Full CRUD functionality for managing products
- Input validation using express-validator
- Swagger-generated API documentation
- 100% unit and integration test coverage
- Secure environment variables using dotenv
- Clean and modular codebase with TypeScript

---

## 📜 License

This project is licensed under the MIT License.

---
