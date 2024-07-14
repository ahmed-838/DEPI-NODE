# data base in another container : 
## 1. pull MYSQL database image to local repo 
```bash 
docker pull mysql:latest 
```
## 2. enter the container bash shell using the following command :
```bash
docker exec -it <container-id> bash 
```
## 3. in the container bash login as an admin with root user usingL: 
```bash
mysql -u <username>..>root -p <password> 
```

## 4. use the following command to create your database 
```bash 
CREATE DATABASE my_database;
```
##### use the command ```SHOW DATABASES;``` to show the databases in the container after u insure that you have logged in with a user 
## 5. use the following command to select database to work on it and to write SQL code after it  :
```bash
# don't forget the semi column
USE <database-name>;
```
 ## 6. write SQL code to create your tables and columns :
 ```SQL 
 # i used this code to create the table that i need in my web chating app
 
 USE my_database;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,  # Unique identifier for each message
  username VARCHAR(50) NOT NULL,  # Username of the sender
  message TEXT NOT NULL,  # The message content
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP  # Timestamp of message creation
);
 ```
 ##### then use the ```DESCRIBE <table-name>; ``` command to display information about your table and it's columns 
 