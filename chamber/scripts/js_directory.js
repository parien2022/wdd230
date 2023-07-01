const path = 'json/data.json';
const gridButton = document.querySelector("#girdButton");
const listButton = document.querySelector("#listButton");
const articleContainer = document.querySelector("article");
console.log(articleContainer)
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
      let h3 = document.createElement('h3');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let link = document.createElement('a');

      brand.setAttribute('data-src', `images/${company.image}`);
      brand.setAttribute('alt', `card of ${company.name}`);
      brand.classList.add("directory-img");
      h3.textContent = company.name
      p1.textContent = company.address
      p2.textContent = company.phone
      link.setAttribute('href', company.website)
      link.textContent = company.website
      
      card.appendChild(brand);
      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(link);

      articleContainer.appendChild(card);
    }); 
  }