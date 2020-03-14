# Ginance Furu

A website that provides all of your investments and shows their performance. It utilizes apis to pull the most recent stocks.

## Motivation/User Story

As an adult who wants to best measure and track my investments, I want an easy website to view my stocks!
As an investor, I want a quick and easy way to see how theyre preforming.

## Demo

[Go to Demo](https://protected-eyrie-72642.herokuapp.com/)

## Stack (MERN & Redux)

This project uses the following technologies

- [MongoDB](https://www.mongodb.com/) for database & [Mongoose](https://mongoosejs.com/)
- [Express.js](http://expressjs.com/) as Node web framework
- [React.js](https://reactjs.org) for client, [Morgan][bluebird]
- [Node.js](https://nodejs.org/en/) for server
- [Create React App](https://github.com/facebook/create-react-app) for bootstrapping client

### Progress

#### View

- [x] View symbol and chart
- [x] measure investments using meter

#### Add Stock

- [x] Enter either symbol or company name
- [x] Enter any notes
- [x] Click submit

#### Containerization & Deployment

- [x] Deployment (Heroku)

## Quick Start

Get up and running with a development server using the following commands

```javascript
// Install all dependencies for client & server
npm install

// Run 
npm start

// Assumes Node and npm are installed on machine
// Server runs on http://localhost:3000 (set in server.js)
```

## Issues and Future Development

- [x] Sometimes the charts wont pull up.
- [x] Sometimes the ticker doesn't display correctly.

- [x] Adding a financial news within a news tab.
- [x] Add an RSS feed to view.
- [x] Add a chat box.

