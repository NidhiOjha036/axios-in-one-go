document.getElementById("btn").addEventListener("click",makerequest);

 //function makerequest(){
//     console.log("Button clicked");

//     config={
//         method:'get',
//         url:'data.txt'
//     }
//     const promiseObj=axios(config)
//     promiseObj.then((res)=>{
//         console.log(res);
//     })

// axios.get('data.txt').then((res)=>{
//     console.log(res.data);
// })


// config={
//     'method':'get'
// }
// axios('data.txt',config).then((res)=>{
//     console.log(res.data);
// })

  //Promise then | showing Data in Browser
// axios.get('data.txt').then((res)=>{
//     console.log(res);
//     document.getElementById("divdata").innerText=res.data;
// }).catch((error)=>{
//     console.log(error);
// })


//}

// Async and Await......Await is only valid with async functions
// async function makerequest(){
//     config={
//         method:'get',
//         url:'data.txt'
//     }
//     const res=await axios(config)
//     console.log(res.data);
// }


// async function makerequest(){
//     const res=await axios.get('data.txt')
//     console.log(res.data);
// }


async function makerequest(){
    try{
    const res=await axios.get('data.txt')
    console.log(res);
    document.getElementById("divdata").innerHTML=res.data;
    }catch(error){
        console.log(error);
    }
}