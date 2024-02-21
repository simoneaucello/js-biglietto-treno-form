
// document.getElementById('price').innerHTML = ` 
// <p>Il prezzo del tuo biglietto è di:
// ${parseFloat(totPrice).toFixed(2)}&euro;</p>
// `;

let ageUser;
let kmUser;
let nameUser;
let car;

const kmPrice = 0.21;
const ticket = document.querySelector('.ticket');

// INPUT 
const nameSurname = document.querySelector('.name');
const kmTravel = document.querySelector('.km');
const agePassenger = document.querySelector('.age');


// BTN 
const generate = document.querySelector('.generate');
const reset = document.querySelector('.reset');


generate.addEventListener('click',function(){
  ticket.classList.toggle('d-none');
})


generate.addEventListener('click', function(){

  console.log(agePassenger.value);
  console.log(kmTravel.value);

  ageUser = parseInt(agePassenger.value);
  kmUser = parseInt(kmTravel.value);
  nameUser = (nameSurname.value);

  let totPrice = kmUser * kmPrice; 

  if(ageUser < 18){
  totPrice = totPrice - (totPrice * 20 / 100);

  document.getElementById('offer').innerHTML = ` 
  <p>Sconto Minorenni</p>
  `;
  }else if(ageUser > 65){
  totPrice = totPrice - (totPrice * 40 / 100);

  document.getElementById('offer').innerHTML = ` 
  <p>Sconto Over 65</p>
  `;
  }else{
    document.getElementById('offer').innerHTML = ` 
  <p>Biglietto Standard</p>
  `;

  }


  console.log(ageUser);
  console.log(kmUser);
  console.log(totPrice);
  console.log(nameUser);

//  PREZZO BIGLIETTO 
  document.getElementById('price').innerHTML = ` 
  <p>${parseFloat(totPrice).toFixed(2)}&euro;</p>
  `;

  // NOME USER 
  document.getElementById('passenger').innerHTML = nameUser;

  // CARROZZA 
  document.getElementById('carrozza').innerHTML = 
  car = Math.floor((Math.random() * 10) + 1);

  // CP CODE 
  document.getElementById('cpCode').innerHTML = 
  ticketNumb = Math.floor(Math.random() * (999999 - 100000 + 1) ) + 100000;

})



// RESET 
reset.addEventListener('click',function(){
  ticket.classList.toggle('d-none');
  agePassenger.value = '';
  kmTravel.value = '';
  nameSurname.value = '';
})














