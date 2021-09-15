//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
   function send()
   {
     msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = ""; 
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
