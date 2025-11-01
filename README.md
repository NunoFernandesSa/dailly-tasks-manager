# Daily Tasks Manager

A mobile application to manage your daily tasks efficiently. Built with React Native and Expo.

## Features

- ✅ Create, edit, and delete tasks
- 🔄 Real-time task status updates
- 💾 Persistent storage with AsyncStorage
- 🌓 Light and dark theme support
- 📱 Cross-platform (iOS, Android, Web)

## Technologies Used

- [React Native](https://reactnative.dev/) - Mobile app framework
- [Expo](https://expo.dev/) - React Native toolchain
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Data persistence

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository

   ```
   git clone <repository-url>
   cd dailly-tasks
   ```

2. Install dependencies

   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```
   npm start
   # or
   yarn start
   ```

4. Follow the instructions in the terminal to open the app on your device or emulator

## Usage

- **Add a task**: Enter task details + tap the "+" button and it will be added to the list
- **Edit a task**: Tap on edit button next to a task to edit its details
- **Delete a task**: Tap on trash button next to a task to delete it
- **Mark as complete**: Tap the checkbox next to a task

## Project Structure

```
src/
├── app/               # Expo Router screens
├── assets/            # Images and styles
├── components/        # UI & Features components
├── constants/         # App constants
├── hooks/             # Custom React hooks
├── store/             # Zustand store
└── types/             # TypeScript type definitions
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

CodeBySa
