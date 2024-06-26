const mongoose = require("mongoose");
const User = require("./models/userModel");
const Course = require("./models/courseModel");
const Schedule = require("./models/scheduleModel");
require("dotenv").config();

// MongoDB Connection config
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB Connection Successful");

    // Seed users
    const users = [
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
        isAdmin: false,
      },
      {
        username: "jane_smith",
        email: "jane@example.com",
        password: "password456",
        isAdmin: true,
      },
    ];

    User.insertMany(users)
      .then(() => {
        console.log("Users seeded successfully");

        // Seed courses
        const courses = [
          {
            name: "Introduction to Programming",
            level: "Beginner",
            description: "Learn the basics of programming.",
            image: "https://example.com/intro-programming.jpg",
          },
          {
            name: "Web Development",
            level: "Intermediate",
            description: "Explore the world of web development.",
            image: "https://example.com/web-development.jpg",
          },
          {
            name: "Data Science",
            level: "Advanced",
            description: "Discover insights from data.",
            image: "https://example.com/data-science.jpg",
          },
        ];

        Course.insertMany(courses)
          .then(() => {
            console.log("Courses seeded successfully");

            // Seed schedules
            const schedules = [
              {
                course: "Introduction to Programming",
                lecture: "Introduction to Variables",
                date: new Date("2024-06-01T09:00:00Z"),
                instructor: "john_doe",
                location: "Room 101",
              },
              {
                course: "Web Development",
                lecture: "Introduction to HTML",
                date: new Date("2024-06-05T10:30:00Z"),
                instructor: "jane_smith",
                location: "Room 202",
              },
              {
                course: "Data Science",
                lecture: "Introduction to Machine Learning",
                date: new Date("2024-06-10T13:00:00Z"),
                instructor: "john_doe",
                location: "Room 303",
              },
            ];

            Schedule.insertMany(schedules)
              .then(() => {
                console.log("Schedules seeded successfully");
                mongoose.disconnect();
              })
              .catch((err) => console.error("Error seeding schedules:", err));
          })
          .catch((err) => console.error("Error seeding courses:", err));
      })
      .catch((err) => console.error("Error seeding users:", err));
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
    process.exit(1);
  });
