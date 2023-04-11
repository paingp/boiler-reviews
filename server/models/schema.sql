DROP DATABASE CourseReviewDB;

CREATE DATABASE IF NOT EXISTS CourseReviewDB;

USE CourseReviewDB;

CREATE TABLE Users (
    user_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(user_id),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Reviews (
    review_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(review_id),
    reviewer_id INTEGER,
    -- FOREIGN KEY (reviewer_id) REFERENCES users(user_id),
    instructor VARCHAR(24),
    term VARCHAR(6),
    years YEAR,
    workload FLOAT,
    grade VARCHAR(2),
    review VARCHAR(4000),
    overall DECIMAL(2, 1),
    difficulty DECIMAL(2, 1),
    standardized DECIMAL(2, 1),
    interesting DECIMAL(2, 1),
    useful DECIMAL(2, 1)
    likes INT
    created_at TIMESTAMP
);