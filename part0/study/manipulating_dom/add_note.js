let list = document.getElementById('ul')[0];

let newElement = document.createElement('li');
newElement.textContent = 'Page manipulation from console is easy';

list.appendChild(newElement);
