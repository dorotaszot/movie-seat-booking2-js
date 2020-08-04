const movieSelect = document.getElementById('movie');
const floor = document.querySelector('.floor');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
let moviePrice = +movieSelect.value;

// Update tickets cound and total price 
function updateCountAndTotal() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsTotal = selectedSeatsCount * moviePrice;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsTotal;
}

// Pick a seat event
floor.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateCountAndTotal();
  }
})

// Movie select event
movieSelect.addEventListener('change', (e) => {
  moviePrice = +e.target.value;
  updateCountAndTotal();
})
