// // const h1 = document.getElementById('main-title');
// // h1.textContent = 'New Text'
// // h1.style.color = 'white'
// // h1.style.backgroundColor = 'black'
// // const li = document.querySelector('li:last-of-type');
// // li.textContent += '(Changed)'
// // const body = document.body;
// // const listItemElements = document.querySelector('li');
// // const listItemElements = document.getElementsByTagName('li');
// // for (const listItemEl of listItemElements) {
// //     console.dir(listItemEl);
// // }
// // const ul = document.querySelector('ul');
// // // ul.lastElementChild.textContent += 'otin';
// // // const bodyEl = ul.closest('body');
// // // bodyEl.style.backgroundColor = 'yellow';
// // // ul.nextElementSibling.style.backgroundColor = 'red';

// // // STYLING

// const section = document.querySelector('section');
// const button = document.querySelector('button');
// section.className = 'red-bg visible';

// button.addEventListener('click', () => {
//     // if (section.className === 'red-bg visible') {
//     //     section.className = 'red-bg invisible';
//     // }
//     // else {
//     //     section.className = 'red-bg visible'
//     // }
//     section.classList.toggle('invisible');
// });

// const div = document.querySelector('div');
// const begin = document.querySelector('#begin');
// const end = document.querySelector('#end');

// begin.addEventListener('click', () => {
//     div.insertAdjacentHTML('beforebegin', '<h2>beforebegin</h2>')
//     div.insertAdjacentHTML('afterbegin', '<h2>afterbegin</h2>')
// });

// end.addEventListener('click', () => {
//     div.insertAdjacentHTML('beforeend', '<h2>beforeend</h2>')
//     div.insertAdjacentHTML('afterend', '<h2>afterend</h2>')
// });

// // const list = document.querySelector('ul');
// // const newListItem1 = document.createElement('li');
// // const newListItem2 = document.createElement('li');
// // list.append(newListItem1, newListItem2);
// // newListItem1.textContent = 'Item 4';
// // newListItem2.style.backgroundColor = 'blue';

// const list = document.querySelector('ul');
// const newListItem = document.createElement('li');
// const secondLi = list.children[1];
// newListItem.textContent = 'Item 4';
// // list.prepend(newListItem);
// // list.lastElementChild.before(newListItem);
// // list.lastElementChild.after(newListItem);
// // list.lastElementChild.replaceWith(newListItem);
// secondLi.insertAdjacentElement('afterend', newListItem);
// const newListItem2 = newListItem.cloneNode(true);
// list.append(newListItem, newListItem2);

const list = document.querySelector('ul');
const newLi = document.createElement('li');
const listItems = list.querySelectorAll('li'); //STATIC LIST
const listItems2 = list.getElementsByTagName('li'); // LIVE LIST
list.append(newLi);
newLi.textContent = "Item 4";

list.parentElement.removeChild(list); //SAFEST WAY TO SUPPORT ALL BROWSER
