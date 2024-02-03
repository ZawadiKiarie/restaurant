function buildContact(){
  updateRestaurantName();

  const content = document.getElementById('content');
  content.innerHTML = '';
  document.body.style.backgroundImage = 'none';
  document.body.classList.add('background');

  const mainCtn = document.createElement('div');
  mainCtn.classList.add('main-ctn');
  content.appendChild(mainCtn);

  const contactMain = document.createElement('div');
  contactMain.classList.add('contact-main');
  mainCtn.appendChild(contactMain);

  const contactCtn = document.createElement('div');
  contactCtn.classList.add('contact-ctn');
  contactMain.appendChild(contactCtn);

  const location = createContactSections('location', 'Location', 'AfriFlavors Kitchen', '1024 Oakwood Avenue', 'Cityville, State 12345', 'Kenya');
  contactCtn.appendChild(location);

  const hours = createContactSections('hours', 'Hours', 'Mon-Fri: 8am - 8pm', 'Sat-Sun: 6am - 6pm');
  contactCtn.appendChild(hours);

  const contact = createContactSections('contact', 'Contact', '(555) 123-4567', 'info@afriflavorskitchen.com');
  contactCtn.appendChild(contact);
}

function createContactSections(className, h2Text, p1Text, p2Text, p3Text, p4Text){
  const contactSection = document.createElement('div');

  const h2 = document.createElement('h2')
  h2.classList.add(className);
  h2.textContent = h2Text;
  contactSection.appendChild(h2);

  const p1 = document.createElement('p')
  p1.classList.add(className);
  p1.textContent = p1Text;
  contactSection.appendChild(p1);

  const p2 = document.createElement('p')
  p2.classList.add(className);
  p2.textContent = p2Text;
  contactSection.appendChild(p2);

  const p3 = document.createElement('p')
  p3.classList.add(className);
  p3.textContent = p3Text;
  contactSection.appendChild(p3);

  const p4 = document.createElement('p')
  p4.classList.add(className);
  p4.textContent = p4Text;
  contactSection.appendChild(p4);

  return contactSection;
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

export { buildContact };