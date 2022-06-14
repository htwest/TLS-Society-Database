Standard PERN stack Todo App

Used to test PERN deployment on Heroku.

-- Deployment Steps --

1.  Make sure Root Dir has a .git file

2.  Move sure Server files are in Root Dir

    - Heroku Requires package.json in Root Dir

3.  In /Client run $npm run build

4.  Set up ENV's in index.js

    - Require "Paths"
    - Set PORT to process.env.PORT
    - set up app to run on build in production enviroment
      - if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(\_\_dirname, "client/build")));
        }

5.  $npm install dotenv

6.  Create .env file and set variables

    - PG_USER
    - PG_PASSWORD
    - PG_HOST
    - PG_PORT
    - PG_DATABASE

7.  Create devloper configuration object to set developer Pool variables

    - const devConfig = {
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT,
      };

8.  Create production configuration object to set Production Pool variables

    - const proConfig = {
      connectionString: process.env.DATABASE_URL, // comes from Heroku Addon
      };

9.  Configure pool variable to use proConfig in a production enviroment

    - const pool = new Pool(
      process.env.NODE_ENV === "production" ? proConfig : devConfig
      );

10. Set up package.json scripts

    - Heroku Script Order:

      - heroku-prebuild
      - npm install
      - heroku-postbuild
      - start

    - Create 'start' script to run node server

      - "start": "node index.js"

    - Create 'heroku-postbuild' script to install client depencenices and create build folder

      - "heroku-postbuild": "cd client && npm install && npm run build"

11. Set up proxy in client package.json and change request paths

    - "proxy" : "http://localhost:5000"

    - proxy is only used in devlopment so it will be ignored in production. If there is no http://localhost:5000 then
      by default it is going to use heroku domain. EX: http://pern-todo-app.herokuapp.com/todos

    - Change fetch requests in app to reflect proxy

      - await fetch("http://localhost:5000/todos") --> await fetch("/todos")

    - Reset cache by deleting and reinstalling node_modules

12. Configure engines in package.json

    - "engines": {
      "node": "xx.xx.x",
      "npm": "x.xx.x"
      }

13. Login to Heroku CLI

    - $heroku login

14. Creat Heroku app

    - $ heroku create app_name

15. Install Postgres addon

    - $ heroku addons:create heroku-postgresql:hobby-dev -a app_name

16. Connect to heroku postgres

    - $ heroku pg:psql -a app_name

17. Create table

    - CREATE TABLE todo(
      ...
      )

18. Add remote git to heroku

    - heroku git:remote -a app_name

19. Push all changes to heroku remote repo

    - git push heroku master
