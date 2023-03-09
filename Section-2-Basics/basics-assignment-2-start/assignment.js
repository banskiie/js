const task3Element = document.getElementById('task-3');

const firstName = 'Shand';
const middleName = 'Ivan';
const lastName = 'Sinohon';

function first() {
    alert('Example');
}

function second() {
    alert(firstName);
}

function third(fn, mn, ln) {
    const fullName = `${fn} ${mn} ${ln}`
    alert(fullName);
}
third(firstName, middleName, lastName);

task3Element.addEventListener('click', first);