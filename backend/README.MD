## Prerequisites

* [Node V12+](https://nodejs.org/en/download/releases/)

## Installation

1. Install dependencies
```bash
    npm install
```
 
2. Run server using
```bash
    npm start
```

3. Visit [http://localhost:8888](http://localhost:8888/)

## Testing
1. To run test, use:
```
   npm test
```

## Folder structure

* **[src](./src)**: Root folder with the source code
* **[controllers](./src/controllers)**: Routes handlers that are used by express
* **[middlewares](./src/middlewares)**: Middlewares for the restricting non-manager to get the data
* **[services](./src/services)**: Main services that handle business logic
* **[shared](./src/shared)**: Shared code by different modules


