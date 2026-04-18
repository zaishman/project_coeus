const homepage= document.getElementById("homepage")
const searchResults= document.getElementById("search-results")
const sendSearch= document.getElementById("send-search-button")
const searchBox= document.getElementById("search-box")

sendSearch.addEventListener("click", function () {
    homepage.style.display= "none"
    searchResults.style.display= "block"

    const query = searchBox.value
    console.log(query)

    fetch("http://localhost:3000/search", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query: query})
    })
    .then(res => res.text())
    .then(data => console.log(data))
})
