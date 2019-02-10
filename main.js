/*

My To Do List
by Amy Lee

To see more works:
amysujunglee.com
github.com/amysujunglee

Reference:
- https://www.w3schools.com/howto/howto_js_todolist.asp
- https://codepen.io/franklynroth/pen/ZYeaBd - Edit To-Do

Steps:
1. Create a input area and result area
2. Create a function for adding a new to-do
3. Create a function for removing the exsiting to-do
4. Create a function for showing which task is completed (check mark)
5. Create a function for clearing out the to-do list
6. Create a function for editing the exsiting to-do

Takeaways:
- How to save the to-do list (Archive)

*/


// *** 2. To add a new to-do using <li> tag
function newElement() {
    // document.createElement() method creates the HTML element specified by tagName, <li>
    // This creates a new <li> and inserts it before the element
    // (1) Create a new li element
	let li = document.createElement('li');
    
    // to store the value from the input area into 'inputValue'
	let inputValue = document.getElementById('myInput').value;
    
    // (2) and give it some content
	var toDo = document.createTextNode(inputValue);
    
    // (3) add the text node to the mewly created li
	li.appendChild(toDo);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
        // (4) add the newly created element and its content into the DOM 
		document.getElementById('myList').appendChild(li);

	}
    // (5) Reset the input area text(value) after adding the new to-do
	document.getElementById('myInput').value = '';
    
    // *** 3. To create a "close" button and append it to each list item
    var span = document.createElement('span');
    var txt = document.createTextNode('x');
    
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    
    var close = document.getElementsByClassName('close');
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var hideLi = this.parentElement; // <li> tag
            hideLi.style.display = 'none';
        }
    }
 }

// *** 4. Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);