# RequestHub — Project Plan

## Overview

**RequestHub** is a web-based developer tool similar to a lightweight Postman or Insomnia.
It allows users to authenticate, build HTTP requests, execute them, and organize them into collections.

The project is designed as a **full-stack portfolio application** demonstrating:

* Frontend architecture
* Backend API design
* Authentication systems
* Database modeling
* Secure session handling
* Dev tooling and deployment practices

The project will be structured as a **client/server monorepo** on GitHub.

---

# 1. Core Goals

This project should demonstrate the following engineering skills:

* Full-stack TypeScript development
* REST API design
* Authentication and session management
* Secure token handling
* Database schema design
* Modern frontend architecture
* Containerized development
* Clean repository structure
* Documentation and maintainability

---

# 2. Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* TailwindCSS
* React Query (or TanStack Query)

Responsibilities:

* Authentication UI
* Request builder interface
* Response viewer
* Collection management
* API interaction

---

## Backend

* Node.js
* Fastify
* TypeScript
* Zod (validation)
* JWT authentication

Responsibilities:

* Authentication
* Session/token management
* Request execution
* Collection storage
* User management
* API endpoints

---

## Database

* PostgreSQL
* Prisma ORM

Responsibilities:

* Store users
* Store sessions/tokens
* Store request collections
* Store request definitions
* Store request execution history

---

## DevOps / Tooling

* Docker
* Docker Compose
* ESLint
* Prettier
* GitHub Actions (optional)

---

# 3. Repository Structure

```
RequestHub/
│
├ client/
│   Next.js frontend
│
├ server/
│   Fastify API
│
├ shared/
│   Shared TypeScript types
│
├ docker/
│   Docker configuration
│
├ docs/
│   Architecture documentation
│
└ README.md
```

---

# 4. Database Schema (Initial)

## users

```
id
email
password_hash
created_at
```

## sessions

```
id
user_id
refresh_token
expires_at
created_at
```

## collections

```
id
user_id
name
created_at
```

## requests

```
id
collection_id
name
method
url
headers
body
created_at
```

## request_runs (optional)

```
id
request_id
status_code
response_body
duration
created_at
```

---

# 5. Authentication System

The system will support **token-based authentication**.

## Login Flow

1. User logs in with email/password
2. Server verifies credentials
3. Server returns:

* Access token (JWT)
* Refresh token

Example request header:

```
Authorization: Bearer <token>
```

---

## Refresh Token Flow

1. Access token expires
2. Client sends refresh token
3. Server issues new access token

---

## Optional Advanced Feature

Session storage using Redis or database.

---

# 6. Backend API Design

## Authentication

```
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
GET  /auth/me
```

---

## Collections

```
GET    /collections
POST   /collections
GET    /collections/:id
DELETE /collections/:id
```

---

## Requests

```
GET    /requests
POST   /requests
PUT    /requests/:id
DELETE /requests/:id
```

---

## Request Execution

```
POST /requests/:id/run
```

Server performs the HTTP request and returns:

```
status
headers
body
duration
```

---

# 7. Frontend Features

## Authentication

Pages:

* Login
* Register

State management:

* Store JWT token
* Handle refresh tokens

---

## API Request Builder

User can define:

* HTTP method
* URL
* Headers
* Body
* Authentication

---

## Response Viewer

Display:

* HTTP status
* Response headers
* Response body
* Request duration

---

## Collections

Users can organize requests:

```
Collection
 ├ Get Users
 ├ Create User
 └ Delete User
```

---

# 8. Security Considerations

Important for portfolio credibility.

* Password hashing (bcrypt)
* JWT expiration
* Input validation
* Protected routes
* Rate limiting (optional)

---

# 9. Development Phases

## Phase 1 — Project Setup

* Initialize repository
* Setup monorepo structure
* Configure TypeScript
* Setup Docker (Postgres)
* Setup Prisma

---

## Phase 2 — Authentication

* User registration
* Password hashing
* Login endpoint
* JWT creation
* Protected routes

---

## Phase 3 — Collections

* Create collections
* List collections
* Delete collections

---

## Phase 4 — Request Builder

* Create requests
* Store requests in database
* Edit requests

---

## Phase 5 — Request Execution

* Server performs external HTTP requests
* Return response to client

---

## Phase 6 — Frontend UI

* Login/register pages
* Dashboard
* Request editor
* Response viewer

---

## Phase 7 — Improvements

Optional advanced features:

* Request history
* Environment variables
* Sharing collections
* Rate limiting
* WebSocket logs

---

# 10. Example User Flow

1. User registers
2. User logs in
3. User creates a collection
4. User adds API requests
5. User executes request
6. Response is displayed

---

# 11. Portfolio Highlights

This project demonstrates:

* Modern full-stack architecture
* Authentication systems
* API design
* Database design
* Secure token handling
* Dockerized development

---

# 12. Future Extensions

Possible improvements:

* OAuth authentication
* Certificate authentication (mTLS)
* Team workspaces
* API environment variables
* Request mocking
* GraphQL support

---

# 13. Deliverables

The final project should include:

* Complete GitHub repository
* Documentation
* Clean commit history
* README with screenshots
* Setup instructions

Example README sections:

```
Overview
Tech Stack
Architecture
Setup Instructions
Screenshots
Future Work
```

---

# 14. Expected Outcome

By completing RequestHub you will have a portfolio project that demonstrates:

* Frontend engineering
* Backend API design
* Authentication implementation
* Real-world developer tooling concepts
* Production-style project structure
