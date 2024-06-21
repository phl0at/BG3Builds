## Database Schema Design

![db-schema](./images/DB_SCHEMA.png)

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    { "errors": { "message": "Unauthorized" } }
    ```

### Authenticate the Current User

Confirms the authentication of the current user.

- Require Authentication: false
- Request

  - Method: GET
  - URL: /api/auth
  - Body: none

- Successful Response when there is a logged in user

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "username": "jsmith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

- Successful Response when there is no logged in user

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    { "errors": { "message": "Unauthorized" } }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/auth/login
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "password": "password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "username": "jsmith",
      "email": "john.smith@gmail.com",
      "builds": [
        {
          "id": 1,
          "user_id": 1,
          "name": "Build 1-1",
          "character_name": "Tav",
          "origin": "custom",
          "race": "Human",
          "sub_race": null,
          "background": "Outlander",
          "strength": 14,
          "dexterity": 10,
          "constitution": 16,
          "intelligence": 8,
          "wisdom": 10,
          "charisma": 16,
          "plus_1": "Constitution",
          "plus_2": "Charisma",
          "helmet": 1,
          "cloak": 2,
          "armor": 3,
          "gloves": 4,
          "boots": 5,
          "amulet": 6,
          "ring_1": 7,
          "ring_2": 8,
          "main_hand": 9,
          "off_hand": 10,
          "ranged_mh": 11,
          "ranged_oh": null,
          "armor_class": 15,
          "classes": [
            {
              "class_id": 1
            },
            {
              "class_id": 2
            },
            {
              "class_id": 3
            },
            {
              "class_id": 4
            },
            {
              "class_id": 5
            }
          ],
          "comments": [
            {
              "id": 2,
              "build_id": 1,
              "user_id": 2,
              "message": "awesome build!"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "name": "Build 2-1",
          "character_name": "Tav",
          "origin": "custom",
          "race": "Human",
          "sub_race": null,
          "background": "Outlander",
          "strength": 14,
          "dexterity": 10,
          "constitution": 16,
          "intelligence": 8,
          "wisdom": 10,
          "charisma": 16,
          "plus_1": "Constitution",
          "plus_2": "Charisma",
          "helmet": 1,
          "cloak": 2,
          "armor": 3,
          "gloves": 4,
          "boots": 5,
          "amulet": 6,
          "ring_1": 7,
          "ring_2": 8,
          "main_hand": 9,
          "off_hand": 10,
          "ranged_mh": 11,
          "ranged_oh": null,
          "armor_class": 15,
          "classes": [
            {
              "class_id": 1
            },
            {
              "class_id": 2
            },
            {
              "class_id": 3
            },
            {
              "class_id": 4
            },
            {
              "class_id": 5
            }
          ],
          "comments": []
        }
      ],
      "favorites": [{ "build_id": 3 }]
    }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Invalid credentials"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json

      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }

    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- Require Authentication: false
- Request

  - Method: POST
  - URL: /api/users
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "username": "jsmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "username": "jsmith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

- Error response: User already exists with the specified email

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json

      "errors": {
        "email": "User with that email already exists"
      }

    ```

- Error response: User already exists with the specified username

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json

      "errors": {
        "username": "User with that username already exists"
      }

    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json

      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }

    ```

## BUILDS

### Get my Builds

Returns all the Builds the logged-in user created.

- Require Authentication: True
- Request

  - Method: GET
  - URL: /api/builds/current
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    [
      {
        "id": 1,
        "user_id": 1,
        "name": "Build 1-1",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": [
          {
            "id": 2,
            "build_id": 1,
            "user_id": 2,
            "message": "awesome build!"
          }
        ]
      },
      {
        "id": 2,
        "user_id": 1,
        "name": "Build 2-1",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": []
      }
    ]
    ```

### Get all Builds

Returns all created Builds.

- Require Authentication: False
- Request

  - Method: GET
  - URL: /api/builds
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    [
      {
        "id": 1,
        "user_id": 1,
        "name": "Build 1-1",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": [
          {
            "id": 2,
            "build_id": 1,
            "user_id": 2,
            "message": "awesome build!"
          }
        ]
      },
      {
        "id": 2,
        "user_id": 1,
        "name": "Build 2-1",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": []
      },
      {
        "id": 3,
        "user_id": 2,
        "name": "Build 1-2",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": [
          {
            "build_id": 3,
            "id": 1,
            "message": "such a cool build!",
            "user_id": 1
          }
        ]
      },
      {
        "id": 4,
        "user_id": 2,
        "name": "Build 2-2",
        "character_name": "Tav",
        "origin": "custom",
        "race": "Human",
        "sub_race": null,
        "background": "Outlander",
        "strength": 14,
        "dexterity": 10,
        "constitution": 16,
        "intelligence": 8,
        "wisdom": 10,
        "charisma": 16,
        "plus_1": "Constitution",
        "plus_2": "Charisma",
        "helmet": 1,
        "cloak": 2,
        "armor": 3,
        "gloves": 4,
        "boots": 5,
        "amulet": 6,
        "ring_1": 7,
        "ring_2": 8,
        "main_hand": 9,
        "off_hand": 10,
        "ranged_mh": 11,
        "ranged_oh": null,
        "armor_class": 15,
        "classes": [
          {
            "class_id": 1
          },
          {
            "class_id": 2
          },
          {
            "class_id": 3
          },
          {
            "class_id": 4
          },
          {
            "class_id": 5
          }
        ],
        "comments": []
      }
    ]
    ```

### Get details of a Build from an id

Returns the details of a build specified by its id.

- Require Authentication: true
- Request

  - Method: GET
  - URL: /api/builds/:build_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "user_id": 1,
      "name": "Build 1-1",
      "character_name": "Tav",
      "origin": "custom",
      "race": "Human",
      "sub_race": null,
      "background": "Outlander",
      "strength": 14,
      "dexterity": 10,
      "constitution": 16,
      "intelligence": 8,
      "wisdom": 10,
      "charisma": 16,
      "plus_1": "Constitution",
      "plus_2": "Charisma",
      "helmet": 1,
      "cloak": 2,
      "armor": 3,
      "gloves": 4,
      "boots": 5,
      "amulet": 6,
      "ring_1": 7,
      "ring_2": 8,
      "main_hand": 9,
      "off_hand": 10,
      "ranged_mh": 11,
      "ranged_oh": null,
      "armor_class": 15,
      "classes": [
        {
          "class_id": 1
        },
        {
          "class_id": 2
        },
        {
          "class_id": 3
        },
        {
          "class_id": 4
        },
        {
          "class_id": 5
        }
      ],
      "comments": [
        {
          "id": 2,
          "build_id": 1,
          "user_id": 2,
          "message": "awesome build!"
        }
      ]
    }
    ```

- Error response: Couldn't find a Server with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build could not be found"
    }
    ```

### Create a Build

Creates and returns a new build.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/builds
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user_id": 1,
      "name": "My New Build",
      "character_name": "Legolas",
      "origin": "custom",
      "race": "Elf",
      "sub_race": "High Elf",
      "background": "Soldier",
      "strength": 12,
      "dexterity": 16,
      "constitution": 10,
      "intelligence": 14,
      "wisdom": 10,
      "charisma": 16,
      "helmet": 1,
      "cloak": 2,
      "armor": 3,
      "gloves": 4,
      "boots": 5,
      "amulet": 6,
      "ring_1": 7,
      "ring_2": 8,
      "main_hand": 9,
      "off_hand": 10,
      "ranged_mh": 11,
      "ranged_oh": null,
      "plus_1": "Dexterity",
      "plus_2": "Charisma",
      "armor_class": 15
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
      {
        "amulet": 6,
        "armor": 3,
        "armor_class": 15,
        "background": "Soldier",
        "boots": 5,
        "character_name": "Legolas",
        "charisma": 16,
        "classes": [],
        "cloak": 2,
        "comments": [],
        "constitution": 10,
        "dexterity": 16,
        "gloves": 4,
        "helmet": 1,
        "id": 5,
        "intelligence": 14,
        "main_hand": 9,
        "name": "My New Build",
        "off_hand": 10,
        "origin": "custom",
        "plus_1": "Dexterity",
        "plus_2": "Charisma",
        "race": "Elf",
        "ranged_mh": 11,
        "ranged_oh": null,
        "ring_1": 7,
        "ring_2": 8,
        "strength": 12,
        "sub_race": "High Elf",
        "user_id": 1,
        "wisdom": 10
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Name is required"
    }
    ```

    ```json
    {
      "errors": "Name must be 3 to 25 characters in length"
    }
    ```

### Edit a Build

Updates and returns an existing build.

- Require Authentication: true
- Require proper authorization: Server must belong to the current user
- Request

  - Method: PUT
  - URL: /api/builds/:build_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "name": "My Edited Build",
      "character_name": "Legolas",
      "origin": "custom",
      "race": "Elf",
      "sub_race": "High Elf",
      "background": "Soldier",
      "strength": 10,
      "dexterity": 16,
      "constitution": 10,
      "intelligence": 14,
      "wisdom": 12,
      "charisma": 16,
      "helmet": 1,
      "cloak": 2,
      "armor": 3,
      "gloves": 4,
      "boots": 5,
      "amulet": 6,
      "ring_1": 7,
      "ring_2": 8,
      "main_hand": 9,
      "off_hand": 10,
      "ranged_mh": 11,
      "ranged_oh": null,
      "plus_1": "Dexterity",
      "plus_2": "Charisma",
      "armor_class": 15
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "user_id": 1,
      "name": "My Edited Build",
      "character_name": "Legolas",
      "origin": "custom",
      "race": "Elf",
      "sub_race": "High Elf",
      "background": "Soldier",
      "strength": 10,
      "dexterity": 16,
      "constitution": 10,
      "intelligence": 14,
      "wisdom": 12,
      "charisma": 16,
      "helmet": 1,
      "cloak": 2,
      "armor": 3,
      "gloves": 4,
      "boots": 5,
      "amulet": 6,
      "ring_1": 7,
      "ring_2": 8,
      "main_hand": 9,
      "off_hand": 10,
      "ranged_mh": 11,
      "ranged_oh": null,
      "plus_1": "Dexterity",
      "plus_2": "Charisma",
      "armor_class": 15
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Name is required"
    }
    ```

    ```json
    {
      "errors": "Name must be 3 to 25 characters in length"
    }
    ```

- Error response: Couldn't find a Server with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build could not be found"
    }
    ```

### Delete a Build

Deletes an existing build.

- Require Authentication: true
- Require proper authorization: Build must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/build/:build_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a Build with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build could not be found"
    }
    ```

### Adding a Class to a Build

Creates and returns a new build/class relationship.

- Require Authentication: true
- Require proper authorization: Build must belong to the current user
- Request

  - Method: POST
  - URL: /api/class/:build_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "class_id": 1
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "build_id": 1,
      "class_id": 1
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Class ID is required"
    }
    ```

- Error response: Couldn't find a Server with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build could not be found"
    }
    ```

### Removing a Class from a Build

Deletes an existing build/class relationship based on ID.

- Require Authentication: true
- Require proper authorization: Build must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/class/:bc_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a buildclass with the specified ID

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Class could not be found"
    }
    ```

## COMMENTS

### Create a Comment

Creates a new comment on a build.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/comments/:build_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user_id": 1,
      "build_id": 4,
      "message": "awesome!!"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 3,
      "user_id": 1,
      "build_id": 4,
      "message": "awesome!!"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": {
        "message": "Required",
        "message": "Maximum length is 200 characters"
      }
    }
    ```

- Error response: Couldn't find a Build with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build couldn't be found"
    }
    ```

### Edit a Comment

Update and return an existing comment

- Require Authentication: true
- Require proper authorization: Comment must belong to the current user
- Request

  - Method: PUT
  - URL: /api/comments/:comment_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "awesome!! i love this build!"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 3,
      "build_id": 4,
      "user_id": 1,
      "message": "awesome!! i love this build!"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": {
        "message": "Required",
        "message": "Maximum length is 200 characters"
      }
    }
    ```

- Error response: Couldn't find a comment with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Comment could not be found"
    }
    ```

### Delete a Comment

Delete an existing comment from a build.

- Require Authentication: true
- Require proper authorization: comment must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/comments/:comment_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a Build with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Comment could not be found"
    }
    ```

## FAVORITES

### Create a Favorite

Favorites a build.

- Require Authentication: true
- Request

  - Method: POST
  - URL: /api/favs/:build_id
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user_id": 1,
      "build_id": 4
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": 1,
      "user_id": 1,
      "build_id": 4
    }
    ```

- Error response: Couldn't find a Build with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "errors": "Build could not be found"
    }
    ```

### Delete a Favorite

Delete an existing favorite.

- Require Authentication: true
- Require proper authorization: comment must belong to the current user
- Request

  - Method: DELETE
  - URL: /api/favs/:fav_id
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Successfully deleted"
    }
    ```

- Error response: Couldn't find a favorite with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Favorite could not be found"
    }
    ```

## Subclasses, Spells, Cantrips, Permanent Effects, and Feats still to come...
