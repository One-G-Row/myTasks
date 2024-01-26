//fetch data from a json file in a local server
//this should be done using a liveserver otherwise the code will encounter errors on the browser
//first option
fetch('./movies.json')
.then((response) => response.json())
.then((json) => console.log(json))

//second option
fetch('movies.json')
.then((response)=>{
console.log('resolved', response)
return response.json()
})
.then((data)=>{
    console.log(data)
})
