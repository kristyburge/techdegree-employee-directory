// SEARCH EMPLOYEES
// ================

// Declare variables
const input = document.querySelector('#search');

// Add event listener on 'keyup' so this is a real-time search
input.addEventListener('keyup', function(){
  const cards = document.querySelectorAll('.cards-container .card');

  // Get the value as user types and transform to lowercase
  const str = input.value.toLowerCase();

  // Loop through the employee cards
  for (let i = 0; i < cards.length; i++){
    // Get employee name
    const employeeName = cards[i].firstElementChild.firstElementChild.getAttribute('alt').toLowerCase();

    // Hide the card if the searched input does not match the employee name
    if ( !employeeName.includes( str ) ){
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'flex';
    }
  }
});

// Reset the HTML when the 'x' is clicked in the 'search' box
input.addEventListener('search', function(){
    const cards = document.querySelectorAll('.cards-container .card');

    // Check to make sure the search field is blank
    if ( '' === input.value){

      // Loop through and reset the HTML
      for (let i = 0; i < cards.length; i++){
        cards[i].style.display = 'flex';
      }
    }
});
