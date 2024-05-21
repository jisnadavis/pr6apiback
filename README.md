# pr6apiback

# Book and Author Management API

This project is an API built with Express and Mongoose for managing books and authors. The API allows users to create, read, update, and delete books and authors, as well as manage the relationship between them.

first create the repository and add a project into it

create an index.js add devloper dependencies and differnt libraries to needed for running the project

create a connection with Moongodb database
then
add two different model and collections for each model here Libro model have dependencies with Author
1:Author model
2:Libro model

create endpoints for each
getauthor:"http://localhost:3000/api/v1/authors/"
postauthor:"http://localhost:3000/api/v1/authors/"
updateauthor:"http://localhost:3000/api/v1/authors/id"
deleteauthor:""http://localhost:3000/api/v1/authors/id"

create endpoint for libro model
getlibro:"http://localhost:3000/api/v1/libro/"
postlibro:http://localhost:3000/api/v1/libro/
{ here in post libro we can post the name of author which have related to the author id}
updateauthor:"http://localhost:3000/api/v1/libro/id"
{ here we can update the author when we updating author if any author exisit in array it remain their and remove the duplicate values
}
deleteauthorformbook:"http://localhost:3000/api/v1/libro/bookid/authorid"
{
here we can remove the name of author from the book
}
deletebook:"http://localhost:3000/api/v1/libro/id"
{
delete the abook from the collections
}
