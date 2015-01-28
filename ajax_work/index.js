function getJSON(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function (){
    if (this.status >=200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  }

  request.send();
}

getJSON('https://yspuku7qvh9u4cr3.firebaseio.com/.json', function(data){

  var students = [];
  _.mapValues(data['c8-students'], function(obj, key, c8){
    students.push(obj.firstName);
  })

  students = _.shuffle(students);
  students = _.chunk(students, 4);
  debugger;

});
