function add_user() {
    user_name=document.getElementById("user_name").value;
   if (user_name==" ") {
       window.alert("User name should not be blank");
       }
       else {
     localStorage.setItem("username", user_name);
    window.location="kwitter_room.html";
}
    }
    