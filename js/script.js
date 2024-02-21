
// document.getElementById('price').innerHTML = ` 
// <p>Il prezzo del tuo biglietto è di:
// ${parseFloat(totPrice).toFixed(2)}&euro;</p>
// `;

let ageUser;
let kmUser;

const kmPrice = 0.21;
const ticket = document.querySelector('.ticket');

// INPUT 
const nameSurname = document.querySelector('.name');
const kmTravel = document.querySelector('.km');
const agePassenger = document.querySelector('.age');


// BTN 
const generate = document.querySelector('.generate');
const reset = document.querySelector('.reset');


console.log(ticket);


generate.addEventListener('click', function(){

  console.log(agePassenger.value);
  console.log(kmTravel.value);

  ageUser = parseInt(agePassenger.value);
  kmUser = parseInt(kmTravel.value);

  let totPrice = kmUser * kmPrice; 

  if(ageUser < 18){
  totPrice = totPrice - (totPrice * 20 / 100);
  }else if(ageUser > 65){
  totPrice = totPrice - (totPrice * 40 / 100);
  }


  console.log(ageUser);
  console.log(kmUser);
  console.log(totPrice);


  document.getElementById('price').innerHTML = ` 
  <p>Il prezzo del tuo biglietto è di:
  ${parseFloat(totPrice).toFixed(2)}&euro;</p>
  `;

})














