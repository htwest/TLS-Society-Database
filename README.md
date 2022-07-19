# The TECH, LAW, and SECURITY Society Databse

This website allows authenticated users to access a registry of Internship information

## Installation

- Fork and Download the Repo

- Navigate to the project folder

- Use Node Package Manager to install all server dependencies

```bash
npm install
```

- Navigtate to client folder and install all client dependencies

```bash
cd client
```

```bash
npm install
```

## License

PENDING

## To-Do

- Create "Blocked" table in Database

  - Schema should include ID and email

- Refactor Register Route to check signup email against "Blocked" Table in Database.

  - If Email is not present, procede with register normally
  - If Found, deny new Signup

- Create "Pending" table in Database

  - Pending will hold unapproved Intership Information.

- Refactor Register to include Internship Information

  - On signup, add Internship Info to "Pending" Table

- Refactor Accept Button to add user Internship to "Internships" Table

  - Accepting Users should delete Internship Info from "Pending" Table

- Build out "Application" Button to present user Internship Info

  - Should retrieve Internship info from "Pending Table"

- Build Protected Routes with Session Data
