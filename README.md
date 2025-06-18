# SocialHub: A Modern React Social Media Platform (with a json server and json db)

Welcome to **SocialHub**, an engaging and dynamic React-based web application that brings the power of social networking to your fingertips! Built as part of an academic project for the Lev Academic Center's 2025 curriculum, SocialHub leverages cutting-edge React technologies and a RESTful API to deliver a seamless user experience for managing todos, posts, albums, and more. Whether you're a developer looking to explore modern React patterns or a user eager to interact with a sleek social platform, SocialHub has something for you!

## 🚀 Project Overview

SocialHub is a full-stack React application designed to interact with a mock REST API (powered by `json-server` and inspired by `jsonplaceholder.typicode.com`). It provides a feature-rich environment where users can log in, register, and manage their personal data, including todos, posts, and photo albums. With a focus on modern React Hooks, asynchronous JavaScript, and a polished user interface, SocialHub showcases the best of web development practices.

### Key Features

- **User Authentication**: Secure login and registration with local storage for session persistence.
- **Dynamic Routing**: Navigate effortlessly with React Router v6, featuring intuitive URLs like `/users/2/albums/5/photos`.
- **Interactive Todos**: Create, update, delete, and sort todos with a responsive checkbox interface.
- **Engaging Posts**: Manage posts with comments, including search, edit, and delete functionalities.
- **Photo Albums**: Browse albums with lazy-loaded photos, complete with CRUD operations.
- **Advanced Optimizations**: Implements caching, state persistence on refresh, and restricted access to user data for enhanced performance and security.

## 🛠️ Technologies Used

SocialHub is built with a modern tech stack, emphasizing React's ecosystem and asynchronous JavaScript:

- **React 18**: Harnessing Hooks like `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, and custom Hooks.
- **React Router v6**: For seamless navigation with `useRoutes`, `useNavigate`, `useParams`, and more.
- **JavaScript (ES6+)**: Leveraging Promises, Async/Await, and the Fetch API for robust API interactions.
- **JSON Server**: A local mock server replicating `jsonplaceholder.typicode.com` for RESTful API testing.
- **React Forms**: Controlled and uncontrolled components with `useForm` and `useRef` for intuitive user input.
- **CSS**: Modular stylesheets for a clean, responsive design.

## 📂 Project Structure

The project follows a modular structure for maintainability and scalability:

- **Single HTML Entry**: A single `index.html` powered by `index.js` for the entire app.
- **Separated Concerns**: Distinct files for React components, JavaScript utilities, and CSS styles.
- **Local JSON Server**: A `db.json` file mimicking the `jsonplaceholder` API for local development.
- **Organized Codebase**: Logical division of components, hooks, and services for clarity.

```text
project-root/
  - api-project/
    - public/
    - src/
      - components/  # Reusable UI components
      - App.js       # Root component with routing
  - json-server/     # Local JSON-Server DB
    - db.json
    - package.json
  - README.md
  - .gitignore
```
## 🌟 Getting Started

Ready to dive into SocialHub? Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git (optional for version control)

### Installation

1. **Clone the Repository** (if using Git):

   ```bash
   git clone https://github.com/Sima-Shulman/SocialHub.git
   cd SocialHub


Install Dependencies:
npm install


Set Up JSON Server:

Install json-server globally: npm install -g json-server
Create a db.json file based on jsonplaceholder.typicode.com data.
Run the server: json-server --watch db.json --port 3001


Start the React App:
npm start

Open http://localhost:3000 in your browser to explore SocialHub!


🎨 Usage

Login: Access the app at /login using a jsonplaceholder username and website as the password.
Register: Create a new user at /register with a unique username and verified password.
Home Dashboard: Navigate to /home to manage your todos, posts, albums, or view personal info.
Interactive Features: Use search, sort, and CRUD operations to engage with your content.
Logout: Safely exit and clear your session with the Logout button.

🧪 Challenges & Enhancements
SocialHub tackles advanced React challenges to elevate the user experience:

State Persistence: Maintains app state across browser refreshes using local storage.
Data Caching: Reduces redundant API calls with client-side caching mechanisms.
Access Control: Prevents unauthorized access to other users' data, ensuring privacy.

📚 Acknowledgments

JSONPlaceholder: For the mock API that powers our data interactions.
JSON Server: For enabling local API development.


SocialHub is more than a project—it's a showcase of modern web development, blending functionality with elegance. Explore, contribute, and enjoy the journey of building a social platform with React! 🌐```
