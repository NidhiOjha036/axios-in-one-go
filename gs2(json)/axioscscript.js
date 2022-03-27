document.getElementById("btn").addEventListener("click",makerequest);

 
//Promise then | showing Data in Browser

// function makerequest(){
// axios.get('data.json').then((res)=>{
//     //console.log(res.data.name);
//     //console.log(res.data.rollno);
//     document.getElementById("divdata1").innerText=res.data.name;
//     document.getElementById("divdata2").innerText=res.data.rollno;
// }).catch((error)=>{
//     console.log(error);
// })

// }


//Async and Await | Showing data in browser

async function makerequest(){
    try{
      const res=await axios.get('data.json')
      document.getElementById("divdata1").innerText=res.data.name;
      document.getElementById("divdata2").innerText=res.data.rollno;
      
    }catch(error){
      console.log(error);
    }
}


