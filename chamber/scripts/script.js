const button = document.querySelector('#button');
const navUl = document.querySelector('.nav-ul');

button.addEventListener('click', () => {
	navUl.classList.toggle('responsive');
});



const date = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

const formattedDate = date.toLocaleDateString('en-US', options)

document.querySelector('#date').textContent = formattedDate


const lastModified = document.lastModified
document.querySelector("#LastModification").textContent = lastModified