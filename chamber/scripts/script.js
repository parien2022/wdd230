function responsiveButton(){
  const button = document.querySelector('#button');
  const navUl = document.querySelector('.nav-ul');
  
  button.addEventListener('click', () => {
    navUl.classList.toggle('responsive');
  });
}
responsiveButton()


function setDateAndBanner(){
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
      joinUs.style.display = "block";
  }

}

setDateAndBanner()



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

function getCompanys(){

  try {
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

          try {
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
          } catch (error) {
          }
          
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
  } catch (error) {
  }
}  
getCompanys()


function weatherApi (){

  try {
    const currentTemp = document.querySelector('#temperature');
    const currentWindSpeed = document.querySelector('#windspeed');
    const weatherIcon = document.querySelector('#weather-img');
    const captionDesc = document.querySelector('#figcaption');


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=imperial&appid=0e8c722357b688e38b99c7e92f420b61';

    async function apiFetch(url) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            displayResults(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
        }
      }
      
      apiFetch(url);

      function displayResults(weatherData) {
        
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        weatherIcon.setAttribute('data-src', iconsrc);
        const desc = weatherData.weather[0].description;
        weatherIcon.setAttribute('alt', desc);

        currentTemp.textContent = weatherData.main.temp.toFixed(0);
        currentWindSpeed.textContent = weatherData.wind.speed.toFixed(0);
        captionDesc.textContent = desc;

        const weatherImage = document.querySelectorAll("img");

        const observerWeather = new IntersectionObserver(handleIntersection, options2);

        weatherImage.forEach(img => {
          observerWeather.observe(img);
      });

      }
    
  } catch (error) {
  }
}
weatherApi ()


function lastDay () {

  try {
    const date = new Date();
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit){

      const timeDiff = Math.abs(date.getTime() - new Date(lastVisit).getTime());
      const daysPassed = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      const dayElement = document.getElementById('storage-day');
      dayElement.textContent = `Days since last visit: ${daysPassed}`
    }

    localStorage.setItem('lastVisit', date);
  } catch (error) {
  }
  
}
lastDay ()


function addDateAndTime(){
  try {
    const date = new Date();
    const JoinformDate = date.toISOString();
    document.getElementById('formDate').setAttribute('value', JoinformDate);
  } catch (error) { 
  }
}
addDateAndTime()

function getRandom(){
  try {
    const memberLevel = ['gold', 'silver', 'bronze', 'basic'];
    const randomLevel = Math.floor(Math.random() * memberLevel.length);
    return memberLevel[randomLevel];
  } catch (error) {
  }
}



function getCompanySpotlights(){

  try {
    const path = 'json/data.json';
    const spot = document.getElementById("spotlight");
    const member = document.getElementById("member-info")

      async function createCompanyCards(path) {
        const response = await fetch(path);
        const data = await response.json();

        displayCompanys(data.companys);
      }
      
      createCompanyCards(path);

      const randomLevel = getRandom()
      const displayCompanys = (companys) => {

        let count = 0
      
        companys.forEach((company) => {
          
          try {

          if(company.membership_level == randomLevel){
            let card = document.createElement('div');
            let brand = document.createElement('img');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let link = document.createElement('a');

            card.setAttribute('id', `spotlight-sec-${count}`)
            card.classList.add(`styled-${randomLevel}`)
            member.innerHTML = `<strong>Now you are signed in as a ${randomLevel} user</strong>`
            member.classList.add(`styled-member-${randomLevel}`)

            brand.setAttribute('data-src', `images/${company.image}`);
            brand.setAttribute('alt', `card of ${company.name}`);
            brand.classList.add("directory-img");
            
            h4.textContent = company.name
            p1.textContent = company.address
            p2.textContent = company.phone
            link.setAttribute('href', company.website)
            link.classList.add('styled-link');
            link.textContent = `${company.name} Web Site`
            
            card.appendChild(brand);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(link);

            spot.appendChild(card);

            count ++;
          }
          
          
          } catch (error) {
          }
      });

      const companyImages = document.querySelectorAll("img");

      const observerCompanys = new IntersectionObserver(handleIntersection, options2);

      companyImages.forEach(img => {
        observerCompanys.observe(img);
      });

      }
  } catch (error) {
  }
}  
getCompanySpotlights()
