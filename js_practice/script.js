

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    const chapterNme = input.value.trim();

    if (chapterNme != '') {

        const liElement = document.createElement('li');
        const deleteButton = document.createElement('button')

        liElement.textContent = chapterNme;
        deleteButton.textContent = '❌';

        list.appendChild(deleteButton);
        list.appendChild(liElement);

        deleteButton.addEventListener('click', function () {
            liElement.remove()
            deleteButton.remove()
        });

        input.focus();

        input.value = '';

    }

});