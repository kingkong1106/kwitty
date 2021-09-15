 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBTRUV8Kv91bGd4fUx7Xi2fj-yr9kq5hBU",
    authDomain: "kwitter-bird.firebaseapp.com",
    databaseURL: "https://kwitter-bird-default-rtdb.firebaseio.com",
    projectId: "kwitter-bird",
    storageBucket: "kwitter-bird.appspot.com",
    messagingSenderId: "636006194814",
    appId: "1:636006194814:web:e3c3caae5b75bdfffd822f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";
function addroom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_names");
  window.location = "index.html";
}