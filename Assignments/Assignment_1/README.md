# 🚀 Employee Management GraphQL API

### COMP3133 – Full Stack Development

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)](https://mongodb.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-purple)](https://www.apollographql.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image%20Hosting-blue)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-orange)]()

Production-style GraphQL backend service for managing employees with authentication, filtering, and cloud-based image uploads.

---

# 📌 Overview

This project implements a secure Employee Management API with:

- 🔐 JWT Authentication
- 👤 User Signup & Login
- 🧑‍💼 Employee CRUD Operations
- 🔍 Filtering by Designation / Department
- ☁️ Cloudinary Image Upload
- 🗄 MongoDB Atlas Integration

---

# 🏗 System Architecture

```mermaid
flowchart LR
    Client[Postman / Apollo Sandbox]
    Server[Node.js + Express + Apollo Server]
    Auth[JWT Middleware]
    DB[(MongoDB Atlas)]
    Cloud[(Cloudinary)]

    Client --> Server
    Server --> Auth
    Server --> DB
    Server --> Cloud
```

---

# 📂 Project Structure

```
COMP3133_STUDENTID_ASSIGNMENT1
│
├── src/
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── db.js
│   │
│   ├── graphql/
│   │   ├── resolvers.js
│   │   └── typeDefs.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Employee.js
│   │   └── User.js
│   │
│   ├── utils/
│   │   ├── cloudinaryUpload.js
│   │   └── errors.js
│   │
│   ├── validators/
│   │   ├── employeeValidators.js
│   │   └── userValidators.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── Screenshots.docx
```

---

# 🔐 Authentication

## 📝 Signup

![Signup](./Screenshots/CreateUser.jpg)

Additional Example:

![Signup 2](./Screenshots/CreateUser2.jpg)

---

## 🔑 Login

![Login](./Screenshots/Login.jpg)

Token must be included in request headers:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 👤 Employee Operations

All employee operations require authentication.

---

## ➕ Create Employee

![Create Employee](./Screenshots/CreateEmployee.jpg)

Additional Example:

![Create Employee 2](./Screenshots/CreateEmployee2.jpg)

---

## 📋 Get All Employees

![Get All](./Screenshots/GetAll.jpg)

---

## 🔎 Get Employee By ID

![Get By ID](./Screenshots/GetbyID.jpg)

---

## 🎯 Search by Designation or Department

![Search](./Screenshots/SearchByDesignationOrDepartment.jpg)

---

## ✏️ Update Employee

![Update](./Screenshots/UpdateByID.jpg)

---

## ❌ Delete Employee

![Delete](./Screenshots/DeletebyID.jpg)

---

# ☁️ Cloudinary Integration

Uploaded employee images are securely stored in Cloudinary.

![Cloudinary](./Screenshots/Cloudinary.jpg)

---

# 🗄 Database Models

## User Model

```js
{
  username: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date
}
```

## Employee Model

```js
{
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  designation: String,
  department: String,
  salary: Number,
  date_of_joining: Date,
  employee_photo: String,
  created_at: Date,
  updated_at: Date
}
```

---

# ▶️ Installation

## 1️⃣ Install dependencies

```bash
npm install
```

## 2️⃣ Create `.env`

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 3️⃣ Start server

```bash
npm run dev
```

Server runs at:

```
http://localhost:4000/graphql
```

---

# 🔒 Security Features

- bcrypt password hashing
- JWT authentication
- Protected GraphQL resolvers
- Environment variable protection
- Cloud-based image storage

---

# 🚀 Features Summary

✔ Clean layered architecture
✔ Cloudinary integration
✔ MongoDB Atlas cloud database
✔ Secure JWT authentication
✔ Filtering & search functionality
✔ Production-style error handling

---

# 👨‍💻 Author

Oleg Sanitskii
COMP3133 – Full Stack Development
George Brown College
