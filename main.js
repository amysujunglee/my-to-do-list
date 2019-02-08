/*

My To Do List
by Amy Lee

To see more works:
amysujunglee.com
github.com/amysujunglee


Reference:
- https://www.w3schools.com/howto/howto_js_todolist.asp
- https://codepen.io/franklynroth/pen/ZYeaBd

*/


function newElement() {
	let li = document.createElement('li');

	let inputValue = document.getElementById('myInput').value;

	var toDo = document.createTextNode(inputValue);
	li.appendChild(toDo);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		document.getElementById('myList').appendChild(li);

	}

	document.getElementById('myInput').value = '';

}