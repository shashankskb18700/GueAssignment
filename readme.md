# Menu Management Backend - Node.js

## Assignment Overview

This project is a Node.js backend server designed to manage a menu system divided into three parts:

1. **Category**: The main category of the menu.
2. **Subcategory**: A category can have multiple subcategories.
3. **Items**: Each subcategory can have multiple items.

This backend provides APIs to create, retrieve, edit, and search these entities. Postman can be used to demo the application.

## Assignment Objectives

- Project setup using Node.js and Express.js.
- Implement CRUD operations for categories, subcategories, and items.
- Provide search functionality for items.
- Document the project.

## Project Setup

### Technologies Used

- **Node.js**: JavaScript runtime for the server-side code.
- **Express.js**: Framework for building the web server and APIs.
- **MongoDB**: Chosen as the database for its flexibility in managing hierarchical data.

### How to Run the Application Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/menu-management-backend.git
   cd menu-management-backend
   ```

2. **Set Up Environment Variables**

   ```MONGODB_URI=your_mongodb_connection_string
    PORT=your_port_number
   ```

3. **Start the Server**
   ```npm start

   ```

4.** Testing with Postman**
You can use Postman to interact with the APIs for creating, retrieving, editing, and searching categories, subcategories, and items.

# Menu Management Backend

## API Endpoints

### Create Operations

#### Create Category

- **POST** `/categories`
- **Attributes:** `name`, `image`, `description`, `taxApplicability`, `tax`, `taxType`

#### Create Subcategory

- **POST** `/categories/:categoryId/subcategories`
- **Attributes:** `name`, `image`, `description`, `taxApplicability`, `tax`

#### Create Item

- **POST** `/categories/:categoryId/items` or **POST** `/subcategories/:subcategoryId/items`
- **Attributes:** `name`, `image`, `description`, `taxApplicability`, `tax`, `baseAmount`, `discount`, `totalAmount`

### Get Operations

#### Get All Categories

- **GET** `/categories`

#### Get Category by ID or Name

- **GET** `/categories/:id` or **GET** `/categories?name=CategoryName`

#### Get All Subcategories

- **GET** `/subcategories`

#### Get Subcategories under a Category

- **GET** `/categories/:categoryId/subcategories`

#### Get Subcategory by ID or Name

- **GET** `/subcategories/:id` or **GET** `/subcategories?name=SubcategoryName`

#### Get All Items

- **GET** `/items`

#### Get Items under a Category or Subcategory

- **GET** `/categories/:categoryId/items` or **GET** `/subcategories/:subcategoryId/items`

#### Get Item by ID or Name

- **GET** `/items/:id` or **GET** `/items?name=ItemName`

### Edit Operations

#### Edit Category

- **PUT** `/categories/:id`

#### Edit Subcategory

- **PUT** `/subcategories/:id`

#### Edit Item

- **PUT** `/items/:id`

### Search Operation

#### Search Items by Name

- **GET** `/
