# Liga Columbus - Java + React Starter

## Database

Inside the `<project-root>/database/` directory, you'll find an executable Bash script (`.sh` file) and several SQL scripts (`.sql` files). These are used to build and rebuild the PostgreSQL database for the Liga Columbus application.

From a terminal session, run:

```
cd <project-root>/database/
./create.sh
```

This Bash script drops the existing database if necessary, creates a new database named `liga_columbus`, and runs the SQL scripts in the correct order. You don't need to modify the Bash script unless changing the database name.

Each SQL script serves a specific purpose:

| File Name    | Description                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `data.sql`   | Populates the database with static setup data or test/demo data. Modify this file for your project-specific data. |
| `dropdb.sql` | Destroys the database and users so it can be recreated. Usually no need to change this.                           |
| `schema.sql` | Creates all database objects such as tables and sequences. Modify to match your application schema.               |
| `user.sql`   | Creates application users and grants privileges. Usually no need to change this.                                  |

### Database Users

Use the `postgres` superuser only for admin tasks. Two users are created for application use:

| Username       | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `liga_owner`   | Schema owner. Has full privileges and can be used with PGAdmin for admin tasks.                            |
| `liga_appuser` | Used by the application to connect to the database. Has `SELECT`, `INSERT`, `UPDATE`, and `DELETE` access. |

## Spring Boot Backend

Note: Spring Boot runs on port `9000` by default in this project.

### Datasource Configuration

Datasource settings are in `src/main/resources/application.properties`. Update them if your database name or credentials differ:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/liga_columbus
spring.datasource.name=liga_columbus
spring.datasource.username=liga_appuser
spring.datasource.password=ligapassword
```

### JdbcTemplate Example

DAO classes use `JdbcTemplate`. Example from `JdbcUserDao`:

```java
@Service
public class JdbcUserDao implements UserDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcUserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
}
```

### CORS Setup

Controllers accessed from the React frontend must use `@CrossOrigin` to allow cross-origin requests:

```java
@RestController
@CrossOrigin
public class AuthenticationController {
    // ...
}
```

## Security

Most security configuration is in `src/main/java/com/liga/security`. You shouldn't need to modify this, but it's available if needed.

## Controllers

Found in `com.liga.controller`. Two are pre-configured:

### AuthenticationController.java

Handles `/login` and `/register`. Uses `JdbcUserDao` to access user data. Works out-of-the-box with the React frontend.

### UserController.java

Provides `/users` and `/users/{id}` to retrieve user data. React uses this to validate stored login tokens.

## Testing

### DAO Integration Tests

Use `com.liga.dao.BaseDaoTest` as the base class for integration tests. This sets up a datasource and handles transaction rollback.

An example test class `JdbcUserDaoTest` is provided.

For testing, the schema is shared with the main application (`database/schema.sql`), but the test data is defined in `src/test/resources/test-data.sql`.
