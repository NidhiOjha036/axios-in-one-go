document.getElementById("btn").addEventListener("click",makerequest);

//Global Axios Default
axios.defaults.headers.common['Authorization'] = 'sdfjsdffjk32423432jkljsdfd342387fdsf';

//Get request
function makerequest(){
    console.log("Button Clicked")

    axios('https://jsonplaceholder.typicode.com/posts/1')
     .then((res)=>{
         console.log("DATA:",res.data)
         console.log("ID:",res.data.id)
         console.log("Title:",res.data.title)
         console.log("Body:",res.data.Body)
     }).catch((error)=>{
         console.log(error)
     })
}