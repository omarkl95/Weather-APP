


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=america,us'
let apiKey = '&APPID=e7ac186e8363c2a1ebd7c73a5ce0cb4e';





const performAction= async () =>{
 
  const feelings = document.getElementById('feelings').value;
  const zip = document.getElementById('zip').value;
  const response = await fetch(`${baseURL}${zip}${apiKey}`);

  try {
    const data = await response.json();
    data.feelings = feelings;
    data.date = newDate;
    await postData('/', data);
    updateUI()
  } catch (error) {
    console.error("error", error);
}
  // fake API call
  // getAnimal('/fakeAnimalData')
  // .then(function(data){
  //   console.log(data)
  //   postData('/addAnimal',{animal:data.animal,fact:data.fact , fav:fav})
  // })
  
  //   updateUI()

  };

  document.getElementById('generate').addEventListener('click', performAction);

  let d = new Date();
  let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
  const getData = async (url = '')=>{

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }





  

// UPDATE UI 
const updateUI = async () => {
  // const request = await getData('/data');
  // try{
    // const allData = await request.json();
    const request = await getData('/data');
    document.getElementById('date').innerHTML = request.date;
    document.getElementById('temp').innerHTML = request.temperature;
    document.getElementById('content').innerHTML  = request.feelings ;

  // }catch(error){
  //   console.log("error", error);
  // }
}
// END UPDATE UI 

// postData('/addMovie', {movie:'the matrix' , score:5});
// postData('/addMovie', {movie:'the asdasd' , score:10});

// postData('/add', {answer:42})
const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}