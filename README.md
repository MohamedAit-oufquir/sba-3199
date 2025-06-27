# SBA-319
### movie
- `GET /api/movie`- get all a movie
- `POST /api/movie` create a movie
- `PATCH /api/movie/:id`- find a movie by Id and update
- `DELETE /api/movie/:id`- find a movie by Id and delete
{
  "name": "Jurassic Park",
  "description": "Dinosaurs are cloned and escape in a dinosaur theme park.",
  "genre": "Adventure",
  "release_years": 2007,
  "_id": "685dd203ddc1b23b6135f303",
  "__v": 0
}



ERROR
  TRY/CATCH method used to catch errors
  Code status (400,200,500) to display proper output or error outputs
  TESTED
  with thunderClient.
Can be checked using Postman

description: The Movies project using MongoDB involves creating a flexible database to store detailed information about films, including titles, genres, ratings, release years, overviews, and runtimes. It enables efficient CRUD operations and advanced queries to manage and retrieve movie data for applications or analysis.

