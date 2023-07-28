
#To create product use this URL
POST http://localhost:8000/Products/create

(keys to enter data in database)
name:'Laptop'
quantity:10

#To load Data from database

GET http://localhost:8000/Products

#To Delete data from database

DELETE http://localhost:8000/Products/:id
here id is 'product id'
#To update quantity in database

POST http://localhost:8000/Products/:id/update_quantity/?number=20
place value after number= ""