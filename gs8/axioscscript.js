document.getElementById("btn").addEventListener("click",makerequest);

function makerequest(){
    axios.get('https://dog.ceo/api/breeds/image/random')
     .then((res)=>{
         //cosole.log(res)
         console.log(res.data.message)
         document.getElementById("image").setAttribute('src',res.data.message)
     }).catch((error)=>{
        console.log(error)
     })
}