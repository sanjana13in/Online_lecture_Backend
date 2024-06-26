<h1 align="center">Online Lecture Scheduling Module (Backend)</h1>



<p align="center">
  <b>An Online Lecture Scheduling Module developed with MERN stack for managing courses, instructors, and schedules.</b>
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Routes](#api-routes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Register and login functionality for users.
- **Instructors Management**: Retrieve all instructors, and log out functionality.
- **Courses Management**: Add courses, retrieve course details, and retrieve course names.
- **Schedule Management**: Add schedules, retrieve schedules, retrieve user schedules, and check instructor availability.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akash-inft1905/Online-Lecture-Scheduling-Module-Backend-.git

## Demo Creadentials
for admin:- 
   username:- akash
   password:- akash1234

for instructor demo you can create or use the following:
username: user1
password: user1234

## Install dependencies:
        
        cd online-lecture-scheduling-backend
        npm install

## Configure environment variables:
    Rename .env.example to .env and update the variables as required (e.g., MongoDB connection string, JWT secret).

## API Routes

### User Authentication:

- **POST /register**: Register a new user.
- **POST /login**: Login user.
- **GET /allinstructors/:id**: Retrieve all instructors.
- **GET /logout/:id**: Log out user.

### Courses Management:

- **POST /addcourse**: Add a new course.
- **GET /getcourse**: Retrieve all courses.
- **GET /getcoursename/:courseId**: Retrieve course name by ID.

### Schedule Management:

- **POST /addschedule**: Add a new schedule.
- **GET /getschedule**: Retrieve all schedules.
- **GET /getuserschedule**: Retrieve user schedules.
- **POST /checkInstructorAvailability**: Check instructor availability.

## Usage

Access the above API endpoints to interact with the backend functionalities.
Use tools like Postman or integrate with the frontend to make API requests.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
