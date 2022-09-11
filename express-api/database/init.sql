-- This script contains all the core tables that are needed in order to run the application. 
-- This script runs with the CI/CD pipeline, along with the other scripts

USE tracker_dev_db;

-- This script is solely for the use of creating Tables
-- disable all constraints
EXEC sp_MSforeachtable "ALTER TABLE ? NOCHECK CONSTRAINT all" -- Disable Sanity Checks
DROP TABLE IF EXISTS dbo.Notes;

DROP TABLE IF EXISTS dbo.AppointmentUsers;

DROP TABLE IF EXISTS dbo.UserPermissions;

DROP TABLE IF EXISTS dbo.UserGroupMembers;

DROP TABLE IF EXISTS dbo.UserGroupPermissions;

DROP TABLE IF EXISTS dbo.Users;

DROP TABLE IF EXISTS dbo.UserGroups;

DROP TABLE IF EXISTS dbo.PermissionTypes;

DROP TABLE IF EXISTS dbo.Appointments;

DROP TABLE IF EXISTS dbo.StatusTypes;

-- TABELS ---------------------------------------------------------------------------------------------
-- Everyone who uses our app is a User
CREATE TABLE dbo.Users (
    userID INT UNIQUE NOT NULL IDENTITY (1, 1),
    phoneNumber VARCHAR(20) UNIQUE,
    -- Account for special characters and foreign formats (scalability is always key)
    firstName VARCHAR(256) NOT NULL,
    lastName VARCHAR(256),
    address TEXT,
    email VARCHAR(256) UNIQUE,
    username VARCHAR(256) UNIQUE,
    PRIMARY KEY (userID)
);

-- Every User is a part of a group
CREATE TABLE dbo.UserGroups (
    groupID INT UNIQUE NOT NULL IDENTITY (1, 1),
    groupName VARCHAR(256),
    groupAlias VARCHAR(3),
    PRIMARY KEY (groupID)
);

-- Admin Users should be able to create and assign permissions to groups and users
CREATE TABLE dbo.PermissionTypes (
    permissionID INT UNIQUE NOT NULL IDENTITY (1, 1),
    permissionName VARCHAR(100),
    permissionAlias VARCHAR(3),
    PRIMARY KEY (permissionID)
);

-- All Appointments should have a status type
CREATE TABLE dbo.StatusTypes (
    statusID INT UNIQUE NOT NULL IDENTITY (1, 1),
    statusType VARCHAR(50),
    PRIMARY KEY (statusID)
);

-- All Users should have access to appointments through their permissions
CREATE TABLE Appointments (
    appointmentID INT UNIQUE NOT NULL IDENTITY (1, 1),
    -- Foreign Key to StatusTypes
    statusID INT,
    -- Boolean, 0 -> false, 1 -> True
    isAllDay NUMERIC(1, 0),
    isArchived NUMERIC(1, 0),
    startDateTime DATETIME,
    endDateTime DATETIME,
    pickupAddress TEXT,
    dropoffAddress TEXT,
    createdOn DATETIME,
    updatedOn DATETIME,
    CONSTRAINT A_Status FOREIGN KEY (statusID) REFERENCES dbo.StatusTypes (statusID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (appointmentID)
);

CREATE TABLE dbo.Notes (
    noteID INT UNIQUE NOT NULL IDENTITY (1, 1),
    userID INT,
    groupID INT,
    appointmentID INT,
    timestampCreated DATETIME,
    timestampLastEdit DATETIME,
    isArchived NUMERIC(1, 0),
    note TEXT,
    CONSTRAINT Notes_UserID FOREIGN KEY (userID) REFERENCES dbo.Users (userID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT Notes_GroupID FOREIGN KEY (groupID) REFERENCES dbo.UserGroups (groupID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT Notes_AppointmentID FOREIGN KEY (appointmentID) REFERENCES dbo.Appointments (appointmentID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (noteID)
);

-- Every appointment has multiple users
CREATE TABLE dbo.AppointmentUsers (
    appointmentID INT,
    userID INT,
    CONSTRAINT AU_UserID FOREIGN KEY (userID) REFERENCES dbo.Users (userID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT AU_AppointmentID FOREIGN KEY (appointmentID) REFERENCES dbo.Appointments (appointmentID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (appointmentID, userID)
);

-- Each User has assignable permissions, permissions should be adjustable by admin users
CREATE TABLE dbo.UserPermissions (
    userID INT,
    permissionID INT,
    CONSTRAINT UP_UserID FOREIGN KEY (userID) REFERENCES dbo.Users (userID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT UP_PermissionID FOREIGN KEY (permissionID) REFERENCES dbo.PermissionTypes (permissionID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (userID, permissionID)
);

-- Every Group has Members, these members can change over time, a user can be apart of multiple groups
CREATE TABLE dbo.UserGroupMembers (
    userID INT,
    groupID INT,
    userTitle VARCHAR(256),
    CONSTRAINT UGM_UserID FOREIGN KEY (userID) REFERENCES dbo.Users (userID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT UGM_GroupID FOREIGN KEY (groupID) REFERENCES dbo.UserGroups (groupID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (userID, groupID)
);

-- Every Group has Permissions, each group can have multiple permissions
CREATE TABLE dbo.UserGroupPermissions (
    groupID INT,
    permissionID INT,
    CONSTRAINT UGP_GroupID FOREIGN KEY (groupID) REFERENCES dbo.UserGroups (groupID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT UGP_PermissionID FOREIGN KEY (permissionID) REFERENCES dbo.PermissionTypes (permissionID) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (groupID, permissionID)
);

-------------------------------------------------------------------------------------------------------
GO
    -- enable all constraints
    EXEC sp_MSforeachtable @command1 = "print '?'",
    @command2 = "ALTER TABLE ? WITH CHECK CHECK CONSTRAINT all"
GO