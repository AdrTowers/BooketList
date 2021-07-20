
//Capture book search bar information
const bookSearch = document.getElementById("form-id");

bookSearch.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchInput = document.getElementById("book-search").value
    
    searchInfo(searchInput)
})

function searchInfo(input){
    console.log("searchInfo:", input)
}