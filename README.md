# The TECH, LAW, and SECURITY Society Databse

This website allows authenticated users to access a registry of Internship information

## Installation

###### Prerequisites

- Node Package Manager
- Postgres

###### Steps

1. Fork and Download the Repo

2. Navigate to the project folder

3. Use Node Package Manager to install all server dependencies

```bash
$ npm install
```

4. Navigtate to client folder and install all client dependencies

```bash
$ cd client
```

```bash
$ npm install
```

5. Log into postgres through portal hub or terminal

```
$ psql username - U
```

6. Create Database, and select it for use

```
# CREATE DATABASE database-name
```

```
# \connect database-name
```

7. Create necessary schemas and add to Database

```
# CREATE TABLE schema_name (
  ...schema_info...
)
```

8. Create .env file and fill in necessary data

9. Navigate back to project directory

10. Start development server

```
$ npm run server
```

11. Navigate to client directory and run client

```
$ cd client
```

```
$ npm run start
```

12. In your browser, navigate to [localhost:3000](http://localhost:3000/)

## License

PENDING

## To-Do

###### Front End

- Submit user info to "applicants" and Institutes info to "pending"

###### Back End

- Create "Pending" table in Database

  - Pending will hold unapproved Intership Information.

- Build out "Reject" functionality

  - Should delete entry from the "Pending" database

- Refactor Register to include Internship Information

  - On signup, add Internship Info to "Pending" Table

- Refactor Accept Button to add user Internship to "Internships" Table

  - Accepting Users should delete Internship Info from "Pending" Table

- Build out "Application" Button to present user Internship Info

  - Should retrieve Internship info from "Pending Table"
