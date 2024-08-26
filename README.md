## Feature Toggle Management Application UI

### Overview
This is the frontend for the Feature Toggle Management application, built with React.js. It interacts with the backend API and provides a user interface for managing feature toggles.

### Prerequisites
* Node.js 14.x or later
* Git (for version control)

### Setup
#### 1. Navigate to the Frontend Directory
```
git clone <repository-url>
cd <repository-directory>
```

#### 2. Install Dependencies
```
npm install
```

#### 3. Run the Frontend Application
```
npm start
```

### Using the Application
#### 1. Login
Access the login page and authenticate with your credentials.
#### 2. Feature Toggle Management
After login, you can manage feature toggles by adding, updating, and deleting features. Pagination is provided for navigating through the list of features.

### Frontend Libraries and Purpose
* `react`: A JavaScript library for building user interfaces.
* `react-router-dom`: Provides declarative routing for React applications, managing navigation between different pages.
* `axios`: A promise-based HTTP client for the browser and Node.js, used for making API requests.
* `bootstrap`: A popular CSS framework for building responsive, mobile-first websites.

### Running the Frontend
Ensure the frontend is running on `http://localhost:3000`.

### Troubleshooting
* **CORS Issues**: Ensure the backend is correctly configured to allow requests from the frontend domain.
* **API Errors**: Ensure the backend is running and accessible at `http://localhost:8080`.