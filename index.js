console.log("This is the ES6 verison of JavaScript Language for the Library Management system");

class Book {
 constructor(name, author, category) {
  this.name = name;
  this.author = author;
  this.category = category;
 }
}

class Display {
 add(book) {
  // console.log("Adding to the Database");
  let tableBody = document.getElementById('tableBody')
  let uistring = `<tr>
                   <td>${book.name}</td>
                   <td>${book.author}</td>
                   <td>${book.category}</td>
                 </tr>`;
   tableBody.innerHTML += uistring;
 }
 clear () {
  // let libraryForm = document.getElementById('libraryFrom');
  libraryForm.reset();
 }
 validate (book) {
  if (book.name.length < 2 || book.author.length < 2) {
   return false;
  }
  else {
   return true;
  }
 }
 show (type, msg) {
  let message = document.getElementById('message');
  let boldText;
  if(type === 'success'){
   boldText = 'Success';
  }
  else{
   boldText = 'Error!';
  }

  message.innerHTML = ` 
 <div class="alert alert-${type} alert-dismissible fade show" role="alert"><strong>${boldText}!</strong>${msg} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
 </button>
 </div>`;
  setTimeout(function(){
   message.innerHTML = '';
  }, 2000);
 }
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
  display.show('Success', 'Your Book has been added Sucessfully.');
 }
 else {
  // show Error to the user
  display.show('Error', "You can not add this Book.");
 }
 e.preventDefault();
}