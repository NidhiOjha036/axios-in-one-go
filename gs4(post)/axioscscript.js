document.getElementById("btn").addEventListener("click",makerequest);

//  function makerequest(){
//      const config={
//          method:'POST',
//          url:'https://reqres.in/api/users',
//          headers:{
//             'Content-Type':'application/json'
//          },
//          data:'{"name":"Sonam", "job":"Web Dev"}'
//      }
//      axios(config).then((res)=>{
//          console.log(res.data)
//      }).catch((error)=>{
//          console.log(error);
//      })
//  }


// function makerequest(){
//     url='https://reqres.in/api/users'
//     data='{"name":"Shristy", "job":"Web Dev"}'
//     const config={
//         headers:{
//            'Content-Type':'application/json'
//         }
//     }
//     axios.post(url,data,config)
//     .then((res)=>{
//         console.log(res.data)
//     }).catch((error)=>{
//         console.log(error);
//     })
// }


//Async and await
async function makerequest(){
    url='https://reqres.in/api/users'
    data='{"name":"Rohan", "job":"Software Engineer"}'
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