/*

My To Do List
by Amy Lee

To see more works:
amysujunglee.com
github.com/amysujunglee

Reference:
- https://www.w3schools.com/howto/howto_js_todolist.asp
- https://codepen.io/franklynroth/pen/ZYeaBd (How to edit a To-Do)

Steps:
1. Create a input area and result area
2. Add a new to-do
3. Remove the exsiting to-do
4. Show which task is completed (+ check mark)
5. Clear out the exsiting to-dos
6. Edit the exsiting to-do
7. Save the current to-do list

Problems:
- How to save the to-do list (Archive?)
- How to edit the exsiting task
- How to display the text input when pressing 'Enter' key

*/
// Setting some unchangeable variables
const form = document.querySelector('form');
const myInput = document.querySelector('#myInput');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');
const myList = document.querySelector('#myList');

// *** 2. To add a new to-do using <li> tag
function newElement() {
    // document.createElement() method creates the HTML element specified by tagName, <li>
    // This creates a new <li> and inserts it before the element
    // (1) Create a new li element
    let li = document.createElement('li');

    // to store the value from the input area into 'inputValue'
    let inputValue = myInput.value;

    // (2) and give it some content
    let toDo = document.createTextNode(inputValue);

    // (3) add the text node to the mewly created li
    li.appendChild(toDo);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        // (4) add the newly created element and its content into the DOM 
        myList.appendChild(li);

    }
    // (5) Reset the input area text(value) after adding the new to-do
    myInput.value = '';

    // *** 3. To create a "close" button and append it to each list item
    let span = document.createElement('span');
    let txt = document.createTextNode('x');

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let hideLi = this.parentElement; // <li> tag
            hideLi.style.display = 'none';
        }
    }
}

// (Optional) Display the text input when pressing 'Enter' key
form.addEventListener('submit', function (e) {
    e.preventDefault();

    newElement(myInput.value);
    myInput.value = '';
});

// *** 4. Add a "checked" symbol when clicking on a list item
myList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// *** 5. Clear out all the tasks in the list
clearBtn.addEventListener('click', function () {
    localStorage.clear();
    while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
});
