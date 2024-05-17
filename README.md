# How to run the project
## Prerequisites
1. Node.js 21.7.3
2. npm (comes with Node.js)
3. Docker
4. Docker-compose

## Running the project
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm run dev`
5. Setup the database as described below 
6. The server should be running on `localhost:5173`

## DB setup
1. Run `docker-compose up -d` to start the database
2. Login to adminer at `localhost:8080` and click SQL command and run:
```SQL
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  FOREIGN KEY ("userId") REFERENCES users(id),
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  FOREIGN KEY ("userId") REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE organizations (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
 
CREATE TABLE users
(
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
  "organizationId" INTEGER,

  FOREIGN KEY ("organizationId") REFERENCES organizations(id),
  PRIMARY KEY (id)
);

CREATE TABLE events
(
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  location varchar(255) NOT NULL,
  "availableTickets" INTEGER NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  "organizationId" INTEGER NOT NULL,

  FOREIGN KEY ("organizationId") REFERENCES organizations(id),
  PRIMARY KEY (id)
);

CREATE TABLE tickets
(
  id SERIAL,
  "type" VARCHAR(255) NOT NULL,
  "time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "eventId" INTEGER NOT NULL,
  "userId" INTEGER NOT NULL,

  FOREIGN KEY ("userId") REFERENCES users(id),
  FOREIGN KEY ("eventId") REFERENCES events(id),
  PRIMARY KEY (id)
);
 ```
