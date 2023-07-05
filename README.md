# Sequelize_RawQuery_CRUD 
- CRUD about Cricket Teams And Cricket Players

## Project Overview
The Cricket Team Management System is a web application that allows users to manage cricket teams and players. It provides functionality for creating, updating, and deleting cricket teams and players.

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize

## Database Schema

### Team Table

| Column     | Type    | Description                |
|------------|---------|----------------------------|
| id         | INTEGER | Primary key                |
| name       | VARCHAR | Team name                  |
| coach_name | VARCHAR | Coach name                 |

### Player Table

| Column   | Type    | Description                          |
|----------|---------|--------------------------------------|
| id       | INTEGER | Primary key                          |
| name     | VARCHAR | Player name                          |
| type     | VARCHAR | Player type (batsman, bowler, all-rounder) |
| age      | INTEGER | Player age                           |


## API Endpoints

### Team Endpoints

- `POST Teams` - Create a new team
- `PUT  Teams/:id` - Update an existing team
- `DELETE Teams/:id` - Delete a team

### Player Endpoints

- `POST Player` - Create a new player
- `PUT Player/:id` - Update an existing player
- `DELETE Player/:id` - Delete a player

## Example Request/Response

```
{
    "Success": true,
    "data": [
        {
            "id": 5,
            "Name": "India",
            "CoachName": "Ashish Nehra",
            "createdAt": "2023-06-27T11:33:14.088Z",
            "updatedAt": "2023-06-27T11:33:14.088Z"
        }
    ],
    "Message": "Data SuccessFully insert"
}
```

