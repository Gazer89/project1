
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClQRilKTe-KBI4WXTo5kyRRDn_qkGVZOo",
    authDomain: "project1-d6708.firebaseapp.com",
    databaseURL: "https://project1-d6708.firebaseio.com",
    projectId: "project1-d6708",
    storageBucket: "",
    messagingSenderId: "167862192351"
  };
  firebase.initializeApp(config);







var apiKey = "&app_key=8BZTgpMGJnMV5sF4";
var limit = 9;
var location = city;
var city;

city = "Denver, CO";
function displaytopics() {
  
  
var queryURL = "http://api.eventful.com/jsonp/events/get?" + apiKey + "&id=E0-001-000278174-6";


$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        var result = response.data;
       console.log(response)
    });
};


$("button").on("click", function(event) {
  displaytopics();
});