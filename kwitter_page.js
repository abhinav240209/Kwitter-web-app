//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("roomname");
document.getElementById("welcome").innerHTML="Welcome to " + room_name;

function send_message() {
      u_message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            u_name:user_name,
            ku_message:u_message,
            like:0
      });
      document.getElementById("msg").innerHTML="";

}
function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key; 
       childData = childSnapshot.val();
        if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      u_name=message_data['u_name'];
      main_message=message_data['ku_message'];
      likes=message_data['like'];
      name_with_tag="<h3>"+u_name+"<sup><img src='tick.png' class='user_tick'></sup></h3>";
      user_message_tag="<h4 class='message_h4'>"+main_message+"</h4>";
      user_like_button="<button style='background-color:yellow;' id='"+firebase_message_id+"' onclick='update_like(this.id)'> like <span class='glyphicon glyphicon-thumbs-up'></span>:"+likes+"</button>";
      row=name_with_tag + user_message_tag + user_like_button;
      document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}



function update_like(message_id) {
      button_id=message_id;
      likes_count=document.getElementById(button_id).value;
      update_likes_count=Number(likes)+1;
      console.log(update_likes_count);
      firebase.database().ref("/"+room_name).child(message_id).update({
            like:update_likes_count
      });

} 