const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){

// filter block
const searchBar = document.forms['search-books'];
searchBar.addEventListener('keyup', functions(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.form(books).forEach(functions(book){
            const title = book.firstElementChild.textCotent;
            if(title.toLowerCase().indexOf(term)) != -1{
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        }}