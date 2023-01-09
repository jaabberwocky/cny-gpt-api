# CNY GPT API

API service to power the CNY GPT project. Backed by the latest and most amazing [davinci-003](https://scale.com/blog/gpt-3-davinci-003-comparison) model!

## Routes

1. `/lucky-phrase`: accepts optional "name" query parameter (e.g. `/lucky-phrase?name=James`); returns a Chinese New Year greeting based on name
2. `/lucky-number`: returns a randomly selected 4 digit number
3. `/previous-result/:number`: number has to be a 4 digit number; returns previous 4D results for that number
4. `/lucky-horoscope`: accepts optional "name" query parameter (e.g. `/lucky-horoscope?name=James`); returns a Chinese New Year horoscope based on name
5. `/ping`: returns { "msg": "pong" } if service is healthy

## Commands

1. `npm run dev`: runs dev server and listens on port 8081 by default
2. `npm run test`: runs all existing test

## Development

1. Run `npm install` to get all dependencies
2. Run `npm run dev` to get dev server up
3. [Optional] Use `postman.json` to load up API routes for testing in [Postman](https://www.postman.com/).

This project was bootstrapped with Fastify-CLI.
