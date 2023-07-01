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



const path = 'json/data.json';
const gridButton = document.getElementById("gridButton");
const listButton = document.querySelector("#listButton");
const articleContainer = document.querySelector("article");

  async function createCompanyCards(path) {
    const response = await fetch(path);
    const data = await response.json();

    displayCompanys(data.companys);
  }
  
  createCompanyCards(path);


  const displayCompanys = (companys) => {
  
    companys.forEach((company) => {
    
      let card = document.createElement('section');
      let brand = document.createElement('img');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let link = document.createElement('a');

      brand.setAttribute('data-src', `images/${company.image}`);
      brand.setAttribute('alt', `card of ${company.name}`);
      brand.classList.add("directory-img");
      
      h4.textContent = company.name
      p1.textContent = company.address
      p2.textContent = company.phone
      link.setAttribute('href', company.website)
      link.textContent = `${company.name} Web Site`
      
      card.appendChild(brand);
      card.appendChild(h4);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(link);

      articleContainer.appendChild(card);
  });

  const companyImages = document.querySelectorAll("img");

  const observerCompanys = new IntersectionObserver(handleIntersection, options2);

  companyImages.forEach(img => {
    observerCompanys.observe(img);
  });

  }

  gridButton.addEventListener('click', () => {
    articleContainer.classList.add("grid");
    articleContainer.classList.remove("list");
  })

  listButton.addEventListener('click', () => {
    articleContainer.classList.add("list");
    articleContainer.classList.remove("grid");
  })









/*const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit){

  const timeDiff = Math.abs(date.getTime() - new Date(lastVisit).getTime());
  const daysPassed = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const dayElement = document.getElementById('storage-day');
  dayElement.textContent = `Days since last visit: ${daysPassed}`
}

localStorage.setItem('lastVisit', date);



function addDateAndTime(){
  const formDate = date.toISOString();
  document.getElementById('formDate').value = formDate;
}
addDateAndTime()*/




