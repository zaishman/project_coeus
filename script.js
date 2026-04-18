const homepage= document.getElementById("homepage")
const searchResults= document.getElementById("search-results")
const sendSearch= document.getElementById("send-search-button")
const searchBox= document.getElementById("search-box")

sendSearch.addEventListener("click", function () {
    homepage.style.display= "none"
    searchResults.style.display= "block"

    const query = searchBox.value
    console.log(query)
})
