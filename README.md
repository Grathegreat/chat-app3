# Real-Time Chat Application

This is a real-time chat application built with Node.js, Express, and Socket.io. It allows users to join a chat room with a username, send text messages, and send photos. The application features profanity filtering and differentiates between messages from the current user and other users with color coding.

## Features

- Real-time messaging
- Send and display photos
- Profanity filter
- User join and leave notifications
- User message color differentiation (blue for the current user, grey for others)

## Technologies Used

- Node.js
- Express
- Socket.io
- HTML/CSS
- JavaScript
- bad-words (for profanity filtering)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)

### Installing

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**

    ```bash
    node index.js
    ```

4. **Open the application in your browser**

    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Join the chat**

    - Enter a username and click the "Join" button.

2. **Send a message**

    - Type a message in the input field and click the "Send" button.

3. **Send a photo**

    - Click the "Add Photo" button, select a photo, and then click the "Send" button.

## Project Structure

- `index.js` - The main server file.
- `public/` - The public directory containing the client-side code.
  - `index.html` - The main HTML file.
  - `styles.css` - The CSS file for styling.
  - `script.js` - The JavaScript file for client-side logic.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
