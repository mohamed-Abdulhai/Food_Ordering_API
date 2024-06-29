# Food Ordering API

This is a RESTful API for a food ordering system, built with Express.js and various modern technologies. The API supports functionalities such as user authentication, order management, file uploads, and more.

## Features

- **User Authentication**: Secure user registration and login using `jsonwebtoken` and `bcrypt`.
- **Order Management**: Create, update, delete, and retrieve food orders.
- **File Uploads**: Upload and manage images using `multer` and `cloudinary`.
- **Data Validation**: Ensure data integrity with `joi`.
- **Database**: Store and retrieve data efficiently with MongoDB, managed via `mongoose`.
- **Testing**: Robust unit and integration tests using `jest`.
- **Environment Configuration**: Manage environment variables using `dotenv`.
- **Slug Generation**: Generate URL-friendly slugs using `slugify`.
- **UUID Generation**: Create unique identifiers using `uuid`.
- **HTTP Request Logging**: Log HTTP requests using `morgan`.
- **Cross-Origin Resource Sharing**: Enable CORS with the `cors` middleware.

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Joi**: Data validation library for JavaScript.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Nodemailer**: Module for Node.js applications to send emails.
- **Cloudinary**: Cloud-based service for image and video management.
- **Jest**: Delightful JavaScript testing framework.
- **jsonwebtoken**: Implementation of JSON Web Tokens.
- **bcrypt**: Library to help you hash passwords.
- **dotenv**: Module to load environment variables from a `.env` file.
- **slugify**: Utility to generate URL-friendly slugs.
- **uuid**: Library to generate unique identifiers.
- **morgan**: HTTP request logger middleware for Node.js.
- **cors**: Middleware to enable CORS.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary Account

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/food-ordering-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd food-ordering-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=your_port
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

2. Alternatively, you can use the provided `.env.example` file to create your `.env` file:
    ```sh
    cp .env.example .env
    ```

### Running the API

1. Start the server:
    ```sh
    npm start
    ```

### Running Tests

1. Run the test suite:
    ```sh
    npm test
    ```

## License

This project is licensed under the MIT License.
