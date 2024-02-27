
//here we want to fetch some data from a API but their is to many .then()  and the code become very messy
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
*/

//To ignore it we use Axios which is a promise-based HTTP Client for node.js and the browse.

import axios from  'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
    console.log(response);
    console.log(response.data);
  })