# Children's Rhymes Archive

## Overview

Children's Rhymes Archive is a full-stack web platform designed to provide personalized and interactive experiences around children's songs. The platform offers playlist management, flexible search capabilities, and real-time lyric synchronization to engage young users and support early childhood learning.

## Features

- 📂 **Custom playlist creation and management**
- 🔍 **Flexible and filterable search functionality**
- ⏱ **Real-time synchronized lyrics display**

## Tech Stack

- **Frontend**: Vue 3 + TypeScript
- **Backend**: Java + Spring Boot
- **Database**: MySQL

## Getting Started

To run this project locally:

# Frontend
1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

The frontend will be running at [http://localhost:5173](http://localhost:5173) by default.

---

# Backend

1. Open the `backend/` directory using an IDE such as IntelliJ IDEA:

    ```bash
    cd backend
    ```

2. Ensure your `application.properties` or `application.yml` is properly configured, including:

    - MySQL connection URL, username, password
    - Server port (default is `8080`)

    Example `application.properties` snippet:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
    spring.datasource.username=root
    spring.datasource.password=your_password
    server.port=8080
    ```

3. Locate the main class and run it through your IDE  

The backend will be available at [http://localhost:8080](http://localhost:8080)
