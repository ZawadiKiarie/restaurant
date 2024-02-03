import Salmon from './salmon1.jpg';
import Chicken from './chicken.jpeg';
import Vegwrap from './vegwrap.jpg';
import Porkribs from './porkribs.jpg';

function buildMenu(){
  updateRestaurantName();

  const content = document.getElementById('content');
  content.innerHTML = '';
  document.body.style.backgroundImage = 'none';
  document.body.classList.add('background');

  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');
  content.appendChild(menuHeader);

  const firstCtn = document.createElement('div');
  firstCtn.classList.add('first-ctn');
  content.appendChild(firstCtn);

  const firstDish = createDishes(Salmon, 'first-dish', 'Grilled Salmon Delight', '$18.99', 'Lemon Herb Quinoa, lemon herb marinade, quinoa, cherry tomatoes, spinach.');
  firstCtn.appendChild(firstDish);

  const secondDish = createDishes(Chicken, 'second-dish', 'Chicken Alfredo', '$15.99', 'Grilled chicken breast, creamy Alfredo sauce, fettuccine pasta, garlic, Parmesan cheese, parsley.');
  firstCtn.appendChild(secondDish);

  const secondCtn = document.createElement('div');
  secondCtn.classList.add('second-ctn');
  content.appendChild(secondCtn);

  const thirdDish = createDishes(Vegwrap, 'first-dish', 'Vegetarian Garden Wrap', '$12.99', 'Spinach wrap, hummus, cucumber, bell peppers, cherry tomatoes, red onion, mixed greens.');
  secondCtn.appendChild(thirdDish);

  const fourthDish = createDishes(Porkribs, 'second-dish', 'BBQ Pork Ribs', '$19.99', 'Pork ribs, homemade barbecue sauce, coleslaw, baked beans, cornbread.');
  secondCtn.appendChild(fourthDish);
}

function createDishes(dishImageSrc, classOfDishCtn, dishTitle, price, description){
  const dish = document.createElement('div');
  dish.classList.add(classOfDishCtn);

  const dishImage = new Image();
  dishImage.src = dishImageSrc;
  dish.appendChild(dishImage)

  const descCtn = document.createElement('div');
  descCtn.classList.add('desc-ctn');
  dish.appendChild(descCtn);

  const dishNameCtn = document.createElement('div');
  dishNameCtn.classList.add('dish-name-ctn');
  descCtn.appendChild(dishNameCtn);

  const dishName = document.createElement('div');
  dishName.classList.add('dish-name');
  dishName.textContent = dishTitle;
  dishNameCtn.appendChild(dishName);

  const dishPrice = document.createElement('div');
  dishPrice.classList.add('price');
  dishPrice.textContent = price;
  dishNameCtn.appendChild(dishPrice);

  const dishDesc = document.createElement('div');
  dishDesc.classList.add('dish-desc');
  dishDesc.textContent = description;
  descCtn.appendChild(dishDesc);

  return dish;
}

function updateRestaurantName() {
  const header = document.querySelector('header');
  let restaurantName = header.querySelector('.restaurant-name');

  if (!restaurantName) {
    restaurantName = document.createElement('div');
    restaurantName.classList.add('restaurant-name');
    header.insertBefore(restaurantName, header.firstChild);
  }

  restaurantName.textContent = 'AfriFlavors Kitchen';
}

export { buildMenu };