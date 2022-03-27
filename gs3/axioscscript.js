document.getElementById("btn").addEventListener("click",makerequest);

 //Promise then | Single Data

//  function makerequest(){
//    console.log("Button Clicked");
//    axios('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>{
//       console.log("DATA",res.data)
//       console.log("ID:",res.data.id)
//       console.log("Title:",res.data.title)
//       console.log("Body:",res.data.body)
//     }).catch((error)=>{
//       console.log(error)
//     })
//  }


//Here data will be in array format
// function makerequest(){
//   config={
//     params:{id:1}
//   }
//   axios('https://jsonplaceholder.typicode.com/posts/',config)
//    .then((res)=>{
//     //  console.log("DATA",res.data[0])
//     data=res.data[0];
//     console.log(data)
//      console.log("ID:",data.id)
//      console.log("Title:",data.title)
//      console.log("Body:",data.body)
//    }).catch((error)=>{
//      console.log(error)
//    })
// }


//Promise then | Single Data|showing data in browser

//  function makerequest(){
//    console.log("Button Clicked");
//    axios('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>{
//       console.log("DATA",res.data)
//       // console.log("ID:",res.data.id)
//       // console.log("Title:",res.data.title)
//       // console.log("Body:",res.data.body)
//       document.getElementById("pid").innerText=`ID: ${res.data.id}`;
//       document.getElementById("title").innerText=`Title: ${res.data.title}`;
//       document.getElementById("body").innerText=`Body: ${res.data.body}`;
//     }).catch((error)=>{
//       console.log(error)
//     })
//  }



//Promise then | Multiple Data
//  function makerequest(){
//    axios('https://jsonplaceholder.typicode.com/posts/')
//     .then((res)=>{
//       console.log("DATA",res.data)
//       res.data.forEach(element => {
//         console.log("ID:",element.id)
//         console.log("Title:",element.title)
//         console.log("Body:",element.body)
//       });
//     }).catch((error)=>{
//       console.log(error)
//     })
//  }

//Promise then | Multiple Data| showing in browser
// function makerequest(){
//   axios('https://jsonplaceholder.typicode.com/posts/')
//    .then((res)=>{
//      console.log("DATA",res.data)
//      let output=document.getElementById("allpost")
//      res.data.forEach(element => {
//        output.innerHTML+=`
//        <div>ID: ${element.id}</div>
//        <div>Title: ${element.title}</div>
//        <div>Body: ${element.body}</div>
//        <br>
//        `
//      });
//    }).catch((error)=>{
//      console.log(error)
//    })
// }


//Async and Await  | Single Data
// async function makerequest(){
//   try{
//     const res=await axios('https://jsonplaceholder.typicode.com/posts/1')
//     console.log("Data",res.data);
//     console.log("ID:",res.data.id);
//     console.log("Title:",res.data.title);
//     console.log("Body:",res.data.body);
//   }catch(error){
//     console.log(error);
//   }
// }


//Async and Await  | Single Data| Showing data in browser
// async function makerequest(){
//   try{
//     const res=await axios('https://jsonplaceholder.typicode.com/posts/1')
//     console.log("Data",res.data);
//     document.getElementById("pid").innerText=`ID: ${res.data.id}`;
//     document.getElementById("title").innerText=`Title: ${res.data.title}`;
//     document.getElementById("body").innerText=`Body: ${res.data.body}`;
//   }catch(error){
//     console.log(error);
//   }
// }



//Async and Await  | Multile Data| Showing data in browser
async function makerequest(){
  try{
    const res=await axios('https://jsonplaceholder.typicode.com/posts')
    console.log("Data",res.data);

    let output=document.getElementById("allpost");
    res.data.forEach(element=>{
      output.innerHTML+=`
       <div>ID: ${element.id}</div>
       <div>Title: ${element.title}</div>
       <div>Body: ${element.body}</div>
      <br>
            `
    
    })
  }catch(error){
    console.log(error);
  }
}


