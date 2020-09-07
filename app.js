const submitBtn = document.getElementById('submit');
const BASE_URL = `https://www.themealdb.com/api/json/v1/1/random.php
`;
const outputDiv = document.getElementById('output');
const icon = document.querySelector('.like i'); 
async function getRecipeData(e) {
  e.preventDefault();
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  let output = '';
  data.meals.forEach((meal) => {
    output += `
    <div class="img-container">
    <img src="${meal.strMealThumb}" alt="" class="img-card" />
  </div>
  <div class="title">
    <h3>${meal.strMeal}</h3>
  </div>

  <div class="description">
  </div>
    `;
  });
  outputDiv.innerHTML = output;
}



function changeIconColor(){
  icon.classList.add('change'); 
  setTimeout(() => { 
    icon.classList.remove('change');
  }, 2000)  
}

submitBtn.addEventListener('click', getRecipeData);
icon.addEventListener('click', changeIconColor);