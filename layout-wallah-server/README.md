# Layout Wallah - User Authentication API

A Node.js/Express.js REST API for user authentication with JWT, password hashing, and MongoDB integration.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Error Handling](#error-handling)
- [Security Features](#security-features)

## Features

- ✅ User registration with validation
- ✅ User login with JWT token generation
- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication middleware
- ✅ User profile retrieval
- ✅ Token blacklisting for logout
- ✅ Input validation with express-validator
- ✅ Cookie-based token storage
- ✅ MongoDB integration with Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

## Installation

1. Clone the repository
2. Navigate to the server directory:

   ```bash
   cd layout-wallah-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables (see [Environment Variables](#environment-variables))

5. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## API Endpoints

### Base URL

```
http://localhost:3000/api/users
```

### 1. User Registration

**Endpoint:** `POST /register`

**Description:** Register a new user account

**Request Body:**

```json
{
  "name": {
    "fname": "John",
    "lname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `name.fname`: Minimum 3 characters
- `email`: Valid email format
- `password`: Minimum 8 characters

**Success Response (201):**

```json
{
  "message": "User Register",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": {
      "fname": "John",
      "lname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**

- `400`: Validation errors
- `401`: Missing required fields or user already exists

**Example cURL:**

```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": {
      "fname": "John",
      "lname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

### 2. User Login

**Endpoint:** `POST /login`

**Description:** Authenticate user and generate JWT token

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules:**

- `email`: Valid email format

**Success Response (200):**

```json
{
  "message": "login Successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": {
      "fname": "John",
      "lname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Responses:**

- `401`: Invalid email/password or validation errors

**Example cURL:**

```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

### 3. Get User Profile

**Endpoint:** `GET /profile`

**Description:** Retrieve authenticated user's profile information

**Headers Required:**

```
Authorization: Bearer <jwt_token>
```

OR

```
Cookie: token=<jwt_token>
```

**Success Response (200):**

```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": {
    "fname": "John",
    "lname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

**Error Responses:**

- `401`: Unauthorized access (invalid/missing token)

**Example cURL:**

```bash
curl -X GET http://localhost:3000/api/users/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### 4. User Logout

**Endpoint:** `POST /logout`

**Description:** Logout user by blacklisting the JWT token

**Headers Required:**

```
Authorization: Bearer <jwt_token>
```

OR

```
Cookie: token=<jwt_token>
```

**Success Response (200):**

```json
{
  "message": "Logout user"
}
```

**Example cURL:**

```bash
curl -X POST http://localhost:3000/api/users/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

## Authentication Flow

1. **Registration:**

   - User provides name, email, and password
   - System validates input data
   - Password is hashed using bcrypt
   - User is saved to database
   - JWT token is generated and returned

2. **Login:**

   - User provides email and password
   - System finds user by email
   - Password is compared with hashed password
   - JWT token is generated and returned

3. **Protected Routes:**

   - Client includes JWT token in Authorization header or cookie
   - Middleware verifies token validity
   - Token is checked against blacklist
   - User data is attached to request object

4. **Logout:**
   - JWT token is added to blacklist
   - Token becomes invalid for future requests

## Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description"
}
```

For validation errors:

```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid_value",
      "msg": "Validation message",
      "path": "field_name",
      "location": "body"
    }
  ]
}
```

## Security Features

- **Password Hashing:** All passwords are hashed using bcrypt with salt rounds of 10
- **JWT Tokens:** Secure token-based authentication with 24-hour expiration
- **Token Blacklisting:** Logged-out tokens are invalidated
- **Input Validation:** Comprehensive validation using express-validator
- **Password Selection:** Passwords are excluded from queries by default
- **Case-Insensitive Email:** Email addresses are stored in lowercase
- **Cookie Security:** Tokens can be stored in HTTP-only cookies

## Database Schema

### User Model

```javascript
{
  name: {
    fname: String (required, min 3 chars),
    lname: String (optional)
  },
  email: String (required, unique, lowercase),
  password: String (required, hashed, select: false)
}
```

### Blacklisted Token Model

```javascript
{
  token: String(required);
}
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token generation/verification
- **express-validator**: Input validation
- **cookie-parser**: Cookie parsing middleware
- **dotenv**: Environment variable management

## Development

To start the development server with auto-reload:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## License

ISC License
