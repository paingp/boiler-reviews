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
    useful DECIMAL(2, 1),
    likes INT,
    created_at TIMESTAMP
);

CREATE OR REPLACE VIEW GetOveralAverages AS
    Select 
        instructor,
        AVG(overall) as average
    FROM reviews
    GROUP BY instructor;

DROP FUNCTION IF EXISTS getOverallAverage;
DELIMITER //
CREATE FUNCTION getOverallAverage(name VARCHAR(24))
RETURNS INT
LANGUAGE SQL
READS SQL DATA
BEGIN
    SET @result=0;
    SELECT
        AVG(overall) INTO @result
    FROM reviews
    WHERE instructor = name
    GROUP BY instructor;
    RETURN @result;
END //
DELIMITER ;