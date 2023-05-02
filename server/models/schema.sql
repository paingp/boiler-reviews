CREATE TABLE CourseReviews (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    course VARCHAR(12) NOT NULL,
    instructor VARCHAR(24),
    term VARCHAR(6),
    year YEAR,
    workload FLOAT,
    grade VARCHAR(2),
    evaluation VARCHAR(60),
    overall DECIMAL(2, 1),
    difficulty DECIMAL(2, 1),
    standardized DECIMAL(2, 1),
    interesting DECIMAL(2, 1),
    useful DECIMAL(2, 1),
    review VARCHAR(4000),
    time DATETIME,
    likes SMALLINT
);

CREATE TABLE InstrReviews (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    instructor VARCHAR(24) NOT NULL,
    course VARCHAR(18),
    term VARCHAR(6),
    year YEAR,
    workload FLOAT,
    delivery VARCHAR(10),
    recommendation VARCHAR(16),
    overall DECIMAL(2, 1),
    teaching DECIMAL(2, 1),
    grading DECIMAL(2, 1),
    caring DECIMAL(2, 1),
    interesting DECIMAL(2, 1),
    review VARCHAR(4000),
    time DATETIME,
    likes SMALLINT
);

CREATE OR REPLACE VIEW CourseRatings AS
SELECT course, ROUND(AVG(overall), 1) AS overall, ROUND(AVG(difficulty), 1) AS difficulty, 
    ROUND(AVG(standardized), 1) AS standardized, ROUND(AVG(interesting), 1) AS interesting, 
    ROUND(AVG(useful), 1) AS useful, ROUND(AVG(workload), 1) AS workload, 
    COUNT(*) AS reviews
FROM CourseReviews
GROUP BY course;

CREATE OR REPLACE VIEW InstrRatings AS
SELECT course, AVG(overall) AS overall, AVG(teaching) AS teaching, AVG(grading) AS grading, 
    AVG(caring) AS caring, AVG(interesting) AS interesting, AVG(workload) AS workload, 
    COUNT(*) AS reviews
FROM InstrReviews
GROUP BY course;
