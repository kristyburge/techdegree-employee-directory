// Initialize variables
const cardContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');
const url = 'https://randomuser.me/api/?results=11&nat=us';

// Create a card for each employee
function createCard(name, email, address, img){
  const card = document.createElement('DIV');
  card.classList.add('card');

  const imgDiv = document.createElement('DIV');
  imgDiv.classList.add('card-img');
  const cardImg = document.createElement('IMG');
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', `${name.first} ${name.last}`);
  imgDiv.appendChild(cardImg);

  const cardContent = document.createElement('DIV');
  cardContent.classList.add('card-content');

  const cardHeader = document.createElement('H4');
  cardHeader.classList.add('card-header');
  cardHeader.innerText = `${name.first} ${name.last}`;

  const cardEmail = document.createElement('P');
  cardEmail.classList.add('card-email');
  cardEmail.innerText = email;

  const cardCity = document.createElement('P');
  cardCity.classList.add('card-city');
  cardCity.innerText = address.city;

  cardContent.appendChild(cardHeader);
  cardContent.appendChild(cardEmail);
  cardContent.appendChild(cardCity);

  card.appendChild(imgDiv);
  card.appendChild(cardContent);

  cardContainer.appendChild(card);
}

// Create an overlay for each employee
function createOverlay(name, email, address, img, dob, phone){
  const card = document.createElement('DIV');
  card.classList.add('card');

  const imgDiv = document.createElement('DIV');
  imgDiv.classList.add('card-img');
  const cardImg = document.createElement('IMG');
  cardImg.setAttribute('src', img);
  cardImg.setAttribute('alt', `${name.first} ${name.last}`);
  imgDiv.appendChild(cardImg);

  const cardContent = document.createElement('DIV');
  cardContent.classList.add('card-content');

  const cardHeader = document.createElement('H4');
  cardHeader.classList.add('card-header');
  cardHeader.innerText = `${name.first} ${name.last}`;

  const cardEmail = document.createElement('P');
  cardEmail.classList.add('card-email');
  cardEmail.innerText = email;

  const cardCity = document.createElement('P');
  cardCity.classList.add('card-city');
  cardCity.innerText = address.city;

  cardContent.appendChild(cardHeader);
  cardContent.appendChild(cardEmail);
  cardContent.appendChild(cardCity);

  const cardDetails = document.createElement('DIV');
  cardDetails.classList.add('card-details');

  const closeModal = document.createElement('SPAN');
  closeModal.classList.add('close-modal');
  closeModal.innerHTML = "&times;";

  const cardPhone = document.createElement('P');
  cardPhone.classList.add('card-phone');
  cardPhone.innerText = phone;

  const cardAddress = document.createElement('P');
  cardAddress.classList.add('card-address');
  cardAddress.innerHTML = `${address.street}<br>${address.city}, ${address.state} ${address.zip}`;

  const cardBday = document.createElement('P');
  cardBday.classList.add('card-birthday');
  cardBday.innerHTML = `Birthday: <span>${dob}</span>`;

  cardDetails.appendChild(cardPhone);
  cardDetails.appendChild(cardAddress);
  cardDetails.appendChild(cardBday);

  card.appendChild(closeModal);
  card.appendChild(imgDiv);
  card.appendChild(cardContent);
  card.appendChild(cardDetails);

  overlay.appendChild(card);

}


// ===============================
// Connect to the Random User API
// ===============================

// 1. Create a new XHR object
const xhr = new XMLHttpRequest();

// 2. Callback function to run
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      // Convert results into an object
      const results = JSON.parse(xhr.responseText);
      // Loop through the results and create a card for each employee
      for (var i = 0; i < results.results.length; i++) {
        var userName = {
          first: results.results[i].name.first,
          last: results.results[i].name.last
        };
        var userEmail = results.results[i].email;
        var userAddress = {
          street: results.results[i].location.street,
          city: results.results[i].location.city,
          state: results.results[i].location.state,
          zip: results.results[i].location.postcode
        };
        var userImg = results.results[i].picture.large;
        // need to convert this result to display MM/DD/YY
        var userBday = results.results[i].dob.date;
        //  may need to convert / format phone number
        var userPhone = results.results[i].phone;

        // Create the card
        createCard(userName, userEmail, userAddress, userImg);

      }

    }
  }
};

// 3. Open the request
xhr.open('GET', url);

// 4. Send the request
xhr.send();


// ==================
// EVENT LISTENERS
// ==================

cardContainer.addEventListener('click', function(){
  // Get the list of cards
  const cards = document.querySelectorAll('.cards-container .card');
  console.log(cards);
  // Determine which card was clicked on
  // Listen on the PARENT


  // Create the overlay for that element


  // Show the overlay
  overlay.style.display = 'block';
});

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', function(){

  // Hide the overlay
  overlay.style.display = 'none';

});
