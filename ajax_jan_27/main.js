// https://yspuku7qvh9u4cr3.firebaseio.com/.json
//
//JSONView

//view json data
//$curl https://yspuku7qvh9u4cr3.firebaseio.com/.json

//postman rest client getpostman.com

//XMLHttpRequest()

//from console in browser

var request = new XMLHttpRequest()

//request.open(method, url, async, user, password); 

request.open('GET', 'https://yspuku7qvh9u4cr3.firebaseio.com/.json');

//asnch is default true. if you set to false, will wait for each request to return before continuing

request.send();

//it returns a string, so must parse

var data = JSON.parse(request.response);

//let's write a function that does this!!

function getJSON(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET, url);
  //b/c return will execute immediately instead of waiting for the response...
  
  request.onload = function (){
    //use of status? happens at a different time than this function
    if (this.status >=200 && this.status < 400) {
      cb(JSON.parse()request.response));
    }
  }
  request.send();
}

//getJSON('https://yspuku7qvh9u4cr3.firebaseio.com/.json'); data

getJSON('https://yspuku7qvh9u4cr3.firebaseio.com/.json', function(data){
  console.log(data.cohort7students);
})
