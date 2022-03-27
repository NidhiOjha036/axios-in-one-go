document.getElementById("btn").addEventListener("click",makerequest);

//Axios instance
const ai=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

//Get request
function makerequest(){
    console.log("Button Clicked")

    ai('/posts/1')
     .then((res)=>{
         console.log("DATA:",res.data)
         console.log("ID:",res.data.id)
         console.log("Title:",res.data.title)
         console.log("Body:",res.data.Body)
     }).catch((error)=>{
         console.log(error)
     })
}