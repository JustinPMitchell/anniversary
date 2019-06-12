console.log("hello world");

let add = document.getElementsByClassName("add")[0];
let list = document.getElementsByClassName("list")[0];

// adding old items
list.innerHTML = localStorage.getItem("list");
list = document.getElementsByClassName("list")[0];
listItems = list.children;

// adds an item to the list
let addItem = function () {
	let newItem = document.createElement("div");
	newItem.innerHTML = document.getElementsByClassName("new-item")[0].value;
	newItem.className = "list-item";
	newItem.addEventListener("click", strike);
	console.log(newItem);
	list.appendChild(newItem);
	list = document.getElementsByClassName("list")[0];
	console.log(list);

	// store updated list
	localStorage.setItem("list", list.innerHTML);

	// retrieve list
	console.log(localStorage.getItem("list"));
}

// strikes through the item
let strike = function () {
	console.log(this);
	this.style.textDecoration = "line-through";
	this.className = "completed-item";
	// let completedItem = document.
}

add.addEventListener("click", addItem);

// adding event listeners to each previously existing item
for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", strike);
}