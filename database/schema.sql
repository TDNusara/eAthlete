-- USERS
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName CHAR(100),
    LastName CHAR(100),
    Gender ENUM('Male', 'Female', 'Other'),
    Username VARCHAR(50),
    Password VARCHAR(255),
    Email VARCHAR(100),
    UserType ENUM('Learner', 'Coach', 'Seller', 'Admin'),
    Bio TEXT,
    District VARCHAR(50),
    Phone VARCHAR(20),
    DPlink VARCHAR(500),
    Status BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB;

-- SPORT
CREATE TABLE Sport (
    SportID INT AUTO_INCREMENT PRIMARY KEY,
    SportName VARCHAR(50)
) ENGINE=InnoDB;

-- LEARNER
CREATE TABLE Learner (
    LearnerID INT PRIMARY KEY,
    Height DECIMAL(5,2),
    Weight DECIMAL(5,2),
    BodyType VARCHAR(20),
    Goals TEXT,
    SportID INT,
    FOREIGN KEY (LearnerID) REFERENCES User(UserID),
    FOREIGN KEY (SportID) REFERENCES Sport(SportID)
) ENGINE=InnoDB;

-- COACH
CREATE TABLE Coach (
    CoachID INT PRIMARY KEY,
    Qualification TEXT,
    Experience TEXT,
    KarateStyle ENUM('Shotokan', 'Shito', 'Goju', 'Wado ryu') NULL;,
    SportID INT,
    FOREIGN KEY (CoachID) REFERENCES User(UserID),
    FOREIGN KEY (SportID) REFERENCES Sport(SportID)
) ENGINE=InnoDB;

-- SELLER
CREATE TABLE Seller (
    SellerID INT PRIMARY KEY,
    StoreName VARCHAR(100),
    BusinessRegNo VARCHAR(100),
    FOREIGN KEY (SellerID) REFERENCES User(UserID)
) ENGINE=InnoDB;

-- ADMIN
CREATE TABLE Admin (
    AdminID INT PRIMARY KEY,
    FullName VARCHAR(100),
    FOREIGN KEY (AdminID) REFERENCES User(UserID)
) ENGINE=InnoDB;

-- PLAN
CREATE TABLE Plan (
    PlanID INT AUTO_INCREMENT PRIMARY KEY,
    CoachID INT,
    LearnerID INT,
    PlanDetails TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CoachID) REFERENCES Coach(CoachID),
    FOREIGN KEY (LearnerID) REFERENCES Learner(LearnerID)
) ENGINE=InnoDB;

-- PROGRESS
CREATE TABLE Progress (
    ProgressID INT AUTO_INCREMENT PRIMARY KEY,
    LearnerID INT,
    Date DATE,
    No_Of_Completed_Lessons INT DEFAULT 0,
    No_Of_Total_Lessons INT DEFAULT 0,
    ProgressStatus VARCHAR(50),
    FOREIGN KEY (LearnerID) REFERENCES Learner(LearnerID)
) ENGINE=InnoDB;

-- ARTICLE
CREATE TABLE Article (
    ArticleID INT AUTO_INCREMENT PRIMARY KEY,
    AuthorID INT,
    Title VARCHAR(255),
    Content TEXT,
    PublishedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (AuthorID) REFERENCES User(UserID)
) ENGINE=InnoDB;

-- COMMENT
CREATE TABLE Comment (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    ArticleID INT,
    UserID INT,
    CommentText TEXT,
    CommentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ArticleID) REFERENCES Article(ArticleID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
) ENGINE=InnoDB;

-- PRODUCT
CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    SellerID INT,
    ProductName VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10,2),
    Image VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SellerID) REFERENCES Seller(SellerID)
) ENGINE=InnoDB;

CREATE TABLE Lesson (
    LessonID INT AUTO_INCREMENT PRIMARY KEY,
    SportID INT,
    CoachID INT,
    DayNo INT,
    Title VARCHAR(255),
    Description TEXT,
    Tips TEXT,
    VideoURL VARCHAR(1000),
    FOREIGN KEY (SportID) REFERENCES Sport(SportID),
    FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
);

CREATE TABLE LessonView (
    ViewID INT AUTO_INCREMENT PRIMARY KEY,
    LearnerID INT,
    LessonID INT,
    ViewedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (LearnerID) REFERENCES Learner(LearnerID),
    FOREIGN KEY (LessonID) REFERENCES Lesson(LessonID)
);
