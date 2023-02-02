# e-commerce_back_end

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Description

Back end for an e-commerce site using Node.js, Express.js, Sequelize, and MySQL.

![preview](/assets/images/e-commerce_back_end_preview1.png)
![preview](/assets/images/e-commerce_back_end_preview2.png)

Click [here](https://watch.screencastify.com/v/yq759C0xZstvCCrj6EC5) to watch a screencastify video demonstrating the application.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

GIVEN a functional Express.js API

- [x] WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
      THEN I am able to connect to a database using Sequelize

- [x] WHEN I enter schema and seed commands
      THEN a development database is created and is seeded with test data

- [x] WHEN I enter the command to invoke the application
      THEN my server is started and the Sequelize models are synced to the MySQL database

- [x] WHEN I open API GET routes in Insomnia Core for categories, products, or tags
      THEN the data for each of these routes is displayed in a formatted JSON

- [x] WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
      THEN I am able to successfully create, update, and delete data in my database

## Installation

- Install `nvm`
- Use `nvm` to install `npm`
- $ git clone git@github.com:box-o-water/e-commerce_back_end.git
- $ npm install
- Install and set up mysql

## Usage

- `$ mysql.server start`
- `$ mysql -u <user> -p`
- `mysql> SOURCE db/schema.sql`
- `mysql> quit`
- Create a copy of `.env_example` file at the same level named `.env`; `.env` is in .gitignore and should NOT be pushed to any VCS (like Github)
- Add your `DB_USER` and `DB_PW` values to the `.env` file
- `$ npm run seeds` to seed the database with starter data
- `$ npm start` to start the server
- In Insomnia Rest Client or a similar API development / testing tool, visit `https://localhost:3001`
- Create `api/products`, `api/categories`, `api/tags` routes for each of the REST methods (GET all , POST, GET by id, PUT by id, DELETE by id)
- Example POST/PUT payloads are located within the code; search the project for "req.body should look like"
- Have fun viewing, creating, updating, and deleting things, if that is your jam

## Contributing

To contribute, create an issue in this repo, or fork this repo and create a pull request against this repo from your fork.

# Tests

N/A

# Questions

Visit my [box-o-water](https://github.com/box-o-water) profile page.

For any questions about this project, please send an email to <boxooowater@gmail.com>.

## Credits

N/A

## License

Licensed under the [MIT](/LICENSE) license.
