function adduser() {
    user_name=document.getElementById("kwi").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    }