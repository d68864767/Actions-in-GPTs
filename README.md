# Custom GPTs and Actions

This project is a web application that demonstrates the use of custom GPTs (Generative Pretrained Transformers) and Actions from OpenAI. It allows users to interact with a tailored version of ChatGPT and perform custom actions by making one or more APIs available to the GPT.

## Features

- Custom GPTs: Deeply customize ChatGPT with all new capabilities.
- Actions: Define custom actions by making one or more APIs available to the GPT.
- Plugins: Connect GPTs to a custom API.
- OpenAPI: OpenAI now hosts the OpenAPI specification for your API.
- Authentication: Actions support multiple authentication schemas which can be set on a per-endpoint basis.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
```
git clone https://github.com/your-repository-url
```
2. Install dependencies
```
npm install
```
3. Start the server
```
npm start
```
The application will be running at `http://localhost:3000`.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [OpenAI](https://openai.com/) - AI research lab

## Files

- `index.html`: The main HTML file that displays the UI of the application.
- `styles.css`: Contains all the styles used in the application.
- `main.js`: The main JavaScript file that sets up the server and middleware.
- `chatGPT.js`: Handles chat requests to the GPT-3 model.
- `actions.js`: Handles custom actions defined by the user.
- `plugins.js`: Connects GPTs to a custom API.
- `openAPI.js`: Handles the OpenAPI specification for your API.
- `auth.js`: Handles authentication for actions.
- `server.js`: Sets up the Express server.
- `package.json`: Contains the list of project dependencies.
- `.env`: Contains environment variables (like the OpenAI API key).
- `README.md`: This file, containing information about the project and instructions on how to run it.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- OpenAI for providing the GPT-3 API and the concept of Actions.
