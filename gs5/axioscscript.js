document.getElementById("btn").addEventListener("click",makerequest);


//Async and await
async function makerequest(e){
    e.preventDefault()
    let name=document.getElementById("name").value;
    let job=document.getElementById("job").value;
    url='https://reqres.in/api/users'
    data=JSON.stringify({name:name,job:job})
    const config={
        headers:{
           'Content-Type':'application/json'
        }
    }
    const res=await axios.post(url,data,config)
    .then((res)=>{
        console.log(res.data)
    }).catch((error)=>{
        console.log(error);
    })
}