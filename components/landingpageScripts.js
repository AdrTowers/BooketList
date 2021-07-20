
//Capture book search bar information
const bookSearch = document.getElementById("form-id");

bookSearch.addEventListener('submit', handleSearch);

function handleSearch(e) {
    e.preventDefault();
    // get user text input for search and store in
    const searchInput = e.target.query.value;
    // resetting the form
    e.target.query.value = "";

    searchBooks(searchInput);
    document.getElementById("results_header").innerHTML = `Your Search Results for ${searchInput}`
    // create card based on user input and append the card to the body
    // let createCard = createCard(searchInput);
    // document.querySelector("#results_container").appendChild(createdCard);

}


function searchBooks(userInput) {
    // google books api link
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&limit=12`;

    // fetch data form the api, parse into json and store as books
    fetch(URL)
        .then((response) => response.json())
        .then((res) => {
            const books = res.items;
            document.getElementById("results_container").innerHTML = "";    // resetting container so it will load the content in slow networks
            displayBookResults(books);  // delegating to display books in results container
        })
        .catch((err) => console.log(err));
}



function displayBookResults(books) {
    console.log(books);
    for (const book of books) {
        const title = book.volumeInfo.title;
        const author = book.volumeInfo.authors; // array
        const description = book.volumeInfo.description; // trim 
        const subtitle = book.volumeInfo.subtitle;
        const isbn = book.volumeInfo.industryIdentifiers;
        const image_url = book.volumeInfo.imageLinks.thumbnail;
        const categories = book.volumeInfo.categories;
        const price = book.saleInfo.retailPrice; // obj
        const buy_url = book.saleInfo.buyLink;

        const card = document.createElement("div");
        card.classList.add("card");


        card.innerHTML = `
        <img src=${image_url} class="card-img-top" height="400" width="250" alt=${title}>
        <div class="card-body">
            <h5 class="card-title">Title: ${title}</h5>
            <h6 class="sub-title text-muted">Author/s: ${author}</h6>
            <p class="card-text"> Description${description}</p>
            <a href="#" class="btn btn-primary">BOOK ET</a>
        </div>
        `
        // add event listener

        document.getElementById("results_container").appendChild(card);

    }
}