console.log("Hello from JS");

var users = [
    { "name": "john", "gender": "Male", "img": "img/john.png" },
    { "name": "jane", "gender": "Female", "img": "img/jane.png" }
];

var currentUserIndex = 0;

function toggleCard() {

    currentUserIndex = (currentUserIndex + 1) % 2;

    var user = users[currentUserIndex];

    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}