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


const joinUs = document.querySelector("#join-us");


const dayOptions = {
    weekday: 'long',
}
const day = date.toLocaleDateString('en-US', dayOptions);

if (day == 'Monday' || day == 'Tuesday'){
    console.log("success")
    joinUs.style.display = "block";
}