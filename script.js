// script.js - JavaScript for My Favorite Books

// ---------- Global variables ----------
var siteName = "My Favorite Books";

// My favorite books
var books = [
  "Nearly All the Men in Lagos Are Mad",
  "Ali Baba and the Forty Thieves",
  "Finding Me",
  "Becoming",
  "The Light We Carry"
];

// Books visitors have recommended (I add new ones here by hand)
var recommended = [
  "Half of a Yellow Sun by Chimamanda Ngozi Adichie",
  "Born a Crime by Trevor Noah"
];

// ---------- Shortcut function ----------
// $("welcome") is a shorter way to write document.getElementById("welcome")
function $(id) {
  return document.getElementById(id);
}

// ---------- Home page ----------
function showWelcome() {
  var today = new Date().toDateString(); // local variable
  $("welcome").innerHTML =
    "Welcome to " + siteName + "! Today is " + today + ".";
  console.log("Welcome message shown");
}

// ---------- Books page ----------
function showBookCount() {
  var total = books.length; // local variable
  $("book-count").innerHTML =
    "I have " + total + " favorite books so far.";
  console.log(books);
}

function showRecommended() {
  // join() glues the array items together with </li><li> between them
  var items = "<li>" + recommended.join("</li><li>") + "</li>";
  $("recommended").innerHTML = items;
  console.log("Recommended books: " + recommended.length);
}

// ---------- Contact page ----------
function thanks() {
  var visitor = $("name").value; // what the visitor typed in the name box
  alert("Thanks, " + visitor + "! I will read " + $("title").value + " soon.");
}