// Link listas:
// https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT

// Link Libros en lista:
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT



window.addEventListener('load', function() {
    document.getElementById("spinner").classList.toggle("spinner2");
});




const listLink = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT";

fetch(listLink)
    .then(response => response.json())

