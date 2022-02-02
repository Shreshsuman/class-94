
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBj3HLHQk71MQUh78rytCBGBSyqbwWSljE",
    authDomain: "kwitter-bbc2b.firebaseapp.com",
    databaseURL: "https://kwitter-bbc2b-default-rtdb.firebaseio.com",
    projectId: "kwitter-bbc2b",
    storageBucket: "kwitter-bbc2b.appspot.com",
    messagingSenderId: "556141493057",
    appId: "1:556141493057:web:4053af8e9a0762d7497fc0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function add_user() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

}