const axios = require("axios")

const fetchData = async ()=>{
    try{
    const data = await axios.get("https://reqres.in/api/users")
    } catch(err){
        console.log(err)
    }finally{
        console.log("session expired")
    }
}
fetchData()