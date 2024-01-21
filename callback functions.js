//this is a callback function with arrow functions
//place argument in the first function and call it in the block scope
//pass the second function inside the first function

let farm = (call_harvest) => {
console.log("Plant the seeds and prepare for harvest")
call_harvest()
}

let harvest = () => {
console.log("it is time to harvest")
}

farm(harvest)

Result: 
Plant the seeds and prepare for harvest
 it is time to harvest