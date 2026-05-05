# healixtesting

A simple calculator web application built with Node.js and Express.js. This project serves as a baseline for testing an AI-powered CI/CD system.

## Features

- Addition, Subtraction, Multiplication, Division
- Clean and simple web UI
- REST API backend
- Full test coverage with Jest

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Run tests

```bash
npm test
```

## CI/CD

GitHub Actions is configured in `.github/workflows/ci.yml`. The pipeline triggers on every push and pull request, and runs:

1. Checkout code
2. Setup Node.js (latest LTS)
3. `npm install`
4. `npm test`

All tests must pass for CI to succeed.