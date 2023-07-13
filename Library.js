console.log("This is the JavaScript File for the Library Management System");


// To do 
// Store all the data to the localstroage
// Given option to delete any book
// Add us a scroll bar to the view


// Constructor
function Book(name, author, category) {
 this.name = name;
 this.author = author;
 this.category = category;
}

// Constructor to Display
function Display() {

}

// Add Methods to display prototype
Display.prototype.add = function (book) {
 console.log("Adding to the Database");
 let uistring = `<tr>
                   <td>${book.name}</td>
                   <td>${book.author}</td>
                   <td>${book.category}</td>
                 </tr>`;
 tableBody.innerHTML += uistring;

}
// Implement the clear function
Display.prototype.clear = function () {
 // let libraryForm = document.getElementById('libraryFrom');
 libraryForm.reset();
}
// Implement the validate function
Display.prototype.validate = function (book) {
 if (book.name.length < 2 || book.author.length < 2) {
  return false;
 }
 else {
  return true;
 }
}
// Implement the show function
Display.prototype.show = function (type, msg) {
 let message = document.getElementById('message');
 message.innerHTML = ` 
<div class="alert alert-${type} alert-dismissible fade show" role="alert"><strong>Message ! ${msg} </strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
</button>
</div>`;
 setTimeout(function(){
  message.innerHTML = '';
 }, 2000);
}


// Add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)
function libraryFormSubmit(e) {
 console.log("You have submitted library Form");
 let name = document.getElementById('bookName').value;
 let author = document.getElementById('authorName').value;

 let science = document.getElementById('science');
 let programming = document.getElementById('programming');
 let engineering = document.getElementById('engineering');
 let category;
 if (science.checked) {
  category = science.value;
 }
 else if (programming.checked) {
  category = programming.value;
 }
 else if (engineering.checked) {
  category = engineering.value;
 }

 let book = new Book(name, author, category)
 console.log(book);

 let display = new Display();
 if (display.validate(book)) {
  display.add(book);
  display.clear();
  display.show('Sucess', 'Your Book has been added Sucessfully.');
 }
 else {
  // show Error to the user
  display.show('Error', "Sorry! You can not add this Book.");
 }
 e.preventDefault();
}