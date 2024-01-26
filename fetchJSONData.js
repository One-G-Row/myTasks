//fetch data from a json file in a local server
//this should be done using a liveserver otherwise the code will encounter errors on the browser
fetch('./movies.json')

.then((response) => response.json())
//const revamp = JSON.parse(json)
.then((json) => console.log(json))