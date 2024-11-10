const apiUrl = `https://demo-api.siit.ro/api`;


function getBooksList(){
    const requestUrl = `${apiUrl}/books`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function getBook(bookId){
    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function addBook(book) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(book)
    }

    const requestUrl = `${apiUrl}/books`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function updateBook(bookId, book) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'PUT',
        body: JSON.stringify(book),
    }

    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function deleteBook(bookId){
    const requestOptions = {
        method: 'DELETE'
    }

    const requestUrl = `${apiUrl}/books/${bookId}`
    fetch(requestUrl, requestOptions)   // response is 204 no content, so the response does not need to be parsed
}


// CREATE
/*
const newBook = {
    name: `Coraline`,
    publish_date: `2002-07-02`
}
addBook(newBook);
*/


// READ
// get the resource list (collection)
getBooksList();

// get the resource havig the id 1
//getBook(1);


// UPDATE
/*
const updBook = {
    name: `Coraline11111`,
    publish_date: `2002-07-07`
}
updateBook(11, updBook);
*/

// DELETE
// deleteBook(11);