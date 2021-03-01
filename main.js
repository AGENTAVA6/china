function  login(){
username = document.getElementById("username").value;
password = document.getElementById("password").value;
if(username == "hackgod6"){
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location = "in.html"
}
}