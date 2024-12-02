CREATE TABLE IF NOT EXISTS jobs (
    id INT PRIMARY KEY,           
    title VARCHAR(255) NOT NULL,  
    cta TEXT NOT NULL,            
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    hours INT NOT NULL,           
    salary DECIMAL(10, 2) NOT NULL
);