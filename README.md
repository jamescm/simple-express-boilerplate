# Simple Express Boilerplate

This is a simple boilerplate to get my projects Express started inspired by https://github.com/i0natan/nodebestpractices. It has my personal preferences baked in:

* ES Modules (via "type": "module")
* Environment variable configuration (for easy use with Docker)
* Minimal dependencies without sacrificing too much productivity

## Getting Started

```
git clone https://github.com/jamescm/simple-express-boilerplate
```

Change the project name in `package.json` and then get coding.

## Project Structure

| Name                                  | Description                                                                           |
|---------------------------------------|---------------------------------------------------------------------------------------|
| components/                           | Where the business logic lives                                                        |
| interfaces/                           | Interface/protocol logic, e.g. HTTP, console, XMPP                                    |
| interfaces/http/                      | HTTP implementation logic                                                             |
| interfaces/http/middleware/           | All Express middleware to be used in app.js                                           |
| interfaces/http/middleware/all.js     | Creates a new Express.Router() with all middleware loaded                             |
| interfaces/http/middleware/headers.js | Essential security header and body parsing middleware (cors, helmet, and body-parser) |
| interfaces/http/app.js                | Express application logic                                                             |
| interfaces/http/server.js             | HTTP server logic                                                                     |
| libraries/                            | Utilities and external libraries, i.e. helpers                                        |
| config.js                             | Application configuration file. This can become a folder if it makes sense            |
| database.js                           | Logic to stand up database connection                                                 |
| start.js                              | Entrypoint for application                                                            |

### Prerequisites

* Node >= v12 -- rename the .js files to .mjs to use with earlier versions

## Authors

* **Cory James** - *Initial work* - [jamescm](https://github.com/jamescm)

See also the list of [contributors](https://github.com/jamescm/simple-express-boilerplate/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
