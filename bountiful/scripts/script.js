function responsiveButton(){
    const button = document.querySelector('#button');
    const navUl = document.querySelector('.nav-ul');
    
    button.addEventListener('click', () => {
      navUl.classList.toggle('responsive');
    });
  }
  responsiveButton()

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

  let formattedDate;

  function setDate(){
    const date = new Date();
  
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
  
    formattedDate = date.toLocaleDateString('en-US', options)
  
    document.querySelector('#date').textContent = formattedDate
  
  
    const lastModified = document.lastModified
    document.querySelector("#LastModification").textContent = lastModified
  }

  setDate()




  function weatherApi (){

    try {
      const currentTemp = document.querySelector('#temperature');
      const currenthumidity = document.querySelector('#humidity');
      const weatherIcon = document.querySelector('#weather-img');
      const captionDesc = document.querySelector('#figcaption');
      const forecast = document.querySelector('#forecast');
  
  
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=0e8c722357b688e38b99c7e92f420b61';
  
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
          captionDesc.textContent = desc;
          currenthumidity.textContent = weatherData.main.humidity.toFixed(0);


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



  function weatherForecastApi(){
    const apiKey = "e6ce036c6d8c850bf9179e98f3754fe7";
    const latitude = 33.14;
    const longitude = 117.29;
    const url = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    //const other = "http://api.openweathermap.org/geo/1.0/direct?q=Carlsbad,06,840&appid={API key}"
    
    async function apiFetch(url) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
      }
    }
    
    apiFetch(url);

    function displayResults(weatherData) {

    }


  }

  //weatherForecastApi()


  function fruitOptions(fruitOption){

    try {
      const path = 'json/data.json';
      const select = document.querySelector(fruitOption);
  
        async function getFruitOptions(path) {
          const response = await fetch(path);
          const data = await response.json();
  
          injectFruitOptions(data);
        }
        
        getFruitOptions(path);
  
        const injectFruitOptions = (fruits) => {
        
          fruits.forEach((fruit) => {
            
            try {

              const option = document.createElement('option');
              option.value = fruit.name;
              option.textContent = fruit.name;
              select.appendChild(option);
            }catch (error) {
            }
        });
  
        }
    } catch (error) {
    }
  }  
  fruitOptions(".fruit1")
  fruitOptions(".fruit2")
  fruitOptions(".fruit3")
  

  function juiceSummary(){
    try {
    const form =document.getElementById('orderForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    

      const firstName = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('cel').value;
      const desc = document.getElementById('desc').value;
      const fruit1 = document.querySelector('.fruit1').value;
      const fruit2 = document.querySelector('.fruit2').value;
      const fruit3 = document.querySelector('.fruit3').value;

      const div = document.querySelector('.drink-summary');
      

      const h3 = document.createElement('h3');
      const p = document.createElement('p')
      const p1 = document.createElement('p')
      const p2 = document.createElement('p')

      h3.textContent = firstName;
      p.textContent = email;
      p1.textContent = phone;
      p2.textContent = desc;

      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(p1);
      div.appendChild(p2);

      const container = document.querySelector('.container-4');
      const orderDate = document.querySelector('.order-date');
      orderDate.textContent = formattedDate;
      
      const path = 'json/data.json';
        async function getFruitOptions(path) {
          const response = await fetch(path);
          const data = await response.json();
  
          injectFruitOptions(data);
        }
        
        getFruitOptions(path);

        let count = 1;
  
        const injectFruitOptions = (fruits) => {
        
          fruits.forEach((fruit) => {
            
            
              if (fruit.name == fruit1 || fruit.name == fruit2 || fruit.name == fruit3){

                const div = document.createElement('div');
                div.setAttribute('id', `fruit-summary${count}`)
                
                html = `
                <h3>${fruit.name}</h3>
                <p>Carbohydrates: ${fruit.nutritions.carbohydrates}</p>
                <p>Protein: ${fruit.nutritions.protein}</p>
                <p>Fat: ${fruit.nutritions.fat}</p>
                <p>Sugar: ${fruit.nutritions.sugar}</p>
                <p>Calories: ${fruit.nutritions.calories}</p>
                `
                div.innerHTML = html;
                container.appendChild(div);

                count ++;
              }
            
        });
        }
        incrementSpecialityDrinksCount();
        
      
    })
  }catch (error) {
  }  
  }

  juiceSummary()


  
  function getSpecialityDrinksCount(){
    return localStorage.getItem("specialityDrinkCount") || 0;
  }

  function incrementSpecialityDrinksCount(){
    const currentCount = parseInt(getSpecialityDrinksCount());
    const newCount = currentCount + 1;
    localStorage.setItem("specialityDrinkCount", newCount);
  }

  function updateSpecialityDrinksCount(){
    try{
      const count = getSpecialityDrinksCount()
    const drinkCount = document.getElementById('drink-count');
    drinkCount.textContent = count.toString();
    } catch(error){
    }
    
  }

  updateSpecialityDrinksCount()