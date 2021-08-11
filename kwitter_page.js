//YOUR FIREBASE LINKS
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAwQuo5IqNDe5b2sA3GAeDxOF72cJStNlY",
    authDomain: "lets-chat-2-3dbca.firebaseapp.com",
    databaseURL: "https://lets-chat-2-3dbca.firebaseio.com",
    projectId: "lets-chat-2-3dbca",
    storageBucket: "lets-chat-2-3dbca.appspot.com",
    messagingSenderId: "872401738385",
    appId: "1:872401738385:web:32019f159aa6e3fa5cbd30",
    measurementId: "G-M4TJEQJKLV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var username=localStorage.getItem("user_name");
  var roomname=localStorage.getItem("room_name");


  function send(){
      var message1=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name:username,
          message:message1,
          like:0
      });
      document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
