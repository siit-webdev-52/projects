const apiUrl = `https://demo-api.siit.ro/api/authors`;

const authorsList = document.querySelector('#authors-list');
const refreshButton = document.querySelector('#list > h2 > span');
const addButton = document.querySelector('#author-form button');
const authorNameTextbox = document.querySelector('#author-name');


function displayAuthors(authors) {
    for (let i = 0; i < authors.length; i++) {
        const li = document.createElement('li');
        authorsList.append(li);

        // adds the name
        const textNode = document.createTextNode(authors[i].name);
        li.append(textNode);
        
        // adds the delete span
        const deleteSpan = document.createElement('span');
        deleteSpan.innerHTML = '&#215;';
        li.append(deleteSpan);
    }
}


function fetchAuthors() {
    // clear the list
    authorsList.textContent = '';

    // fetch data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayAuthors(data))
}


function addAuthor() {
    const requestOptions = {
        headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify({ name: authorNameTextbox.value }),
    }

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}

// refresh list button behaviour
refreshButton.addEventListener('click', fetchAuthors);


addButton.addEventListener('click', addAuthor);
