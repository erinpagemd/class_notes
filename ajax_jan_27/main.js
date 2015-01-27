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


