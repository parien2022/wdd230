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

const images = document.querySelectorAll("img");

const options2 = {
  threshold: 0.5
};



const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");

      if (src) {
        img.src = src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    }
  })
} 

const observer = new IntersectionObserver(handleIntersection, options2);

images.forEach(img => {
  observer.observe(img);
});


/*const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const src = element.getAttribute("data-src");

      if (src) {
        if (element.tagName === "IMG") {
          element.src = src;
        } else if (element.tagName === "SOURCE") {
          element.srcset = src;
          const title = element.getAttribute("title");
          element.parentElement.title = title;
        }

        element.classList.add("loaded");
        observer.unobserve(element);
      }
    }
  })
}*/


