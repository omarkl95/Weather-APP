const express = require('express');
const app = express();

// Create JS object ,The variable appData now acts as the endpoint for all our app
projectData = {};
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
    
//     res.send('hello world');
        

//   });
  // respond with "hello world" when a GET request is made to the homepage

//Dummy API Endpoint
// const fakeData={
//     animal:'lion',
//     fact: 'lions are fun'
// }

app.get('/data', (req, res) => {
  console.log('GET request received');
  res.send(projectData);

  //   app.get('/all', function (req, res) {
//     console.log(animalData);
//     res.send(appData);
//   });
});
//


// app.post('/addAnimal', addAnimal);

// function addAnimal(req,res){

//     console.log(req.body)

//   newEntry = {
//     animal: req.body.animal,
//     facts: req.body.fact,
//     fav: req.body.fav
//   }

//   animalData.push(newEntry)
//   console.log(animalData)
// }




 
  // POST method route
// app.post('/', function (req, res) {
//     res.send('POST received');
//     data.push(req.body);
//   })

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('web'));
////////////Creating A Local Server With Node & Express

const port = 8000;
//spin up the server
const server = app.listen(port, listening);
//call back to debug
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}
// Arrow functions are a shorter, more efficient way to write functions. In what takes a regular function three lines of code, arrow functions can be written with one.
     // const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
////////Creating A Local Server With Node & Express
app.post('/', (req, res) => {
  projectData.date = req.body.date;
  projectData.temperature = req.body.main.temp;
  projectData.feelings = req.body.feelings;
  console.log('POST request received');
  res.end();
});

