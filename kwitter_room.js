
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyDrZzTilm9dgcV06tmF9s0cu4FAtNrIH8g",
    
      authDomain: "kwitter-web-app-8c0ee.firebaseapp.com",
    
      databaseURL: "https://kwitter-web-app-8c0ee-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-web-app-8c0ee",
    
      storageBucket: "kwitter-web-app-8c0ee.appspot.com",
    
      messagingSenderId: "943289293451",
    
      appId: "1:943289293451:web:5c05d40c9c5c8fd115928e",
    
      measurementId: "G-42W5C8WPFJ"
    
    };

    // Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
console.log(user_name);
document.getElementById("welcome").innerHTML="Welcome " + user_name;

function add_room() {
      room_name= document.getElementById("room_name").value;
      localStorage.setItem("roomname", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="kwitter_page.html";
}
    
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {
             childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names are - " + Room_names);
      row="<div id="+Room_names + "class='btn btn-info' name='room_div' onclick='redirect_room(this.id)'>" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
 
function redirect_room(R_name) {
      window.location="kwitter_page.html";
      localStorage.setItem("roomname", R_name);
}

function search_room() {
      search_item=document.getElementById("search").value;
      names=document.getElementsByName("room_div");
      console.log(names);

      for (i=0;i<names.length;i++) {
            console.log(names[i].innerHTML);
            if (search_item==names[i].innerHTML) {
                  console.log("room name found");
                  names[i].style.background="yellow";
            }
      }
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}