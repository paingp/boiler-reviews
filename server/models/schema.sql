CREATE TABLE CourseReviews (
    course VARCHAR(12),
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