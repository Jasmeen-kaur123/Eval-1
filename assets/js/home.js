function bookRoom() {
  const bookingInfo = document.getElementById("show-booking-info");

  const checkInDate = document.getElementById("check-in").value;
  const checkOutDate = document.getElementById("check-out").value;
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);
  const diffTime = Math.abs(checkOut - checkIn);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const basePrice = 106.22; // Base direct price per night
  const totalCost = (basePrice * diffDays).toFixed(2);

  bookingInfo.style.display = "block";

  bookingInfo.querySelector("#booking-checkin").innerHTML = checkInDate;
  bookingInfo.querySelector("#booking-checkout").innerHTML = checkOutDate;
  bookingInfo.querySelector("#booking-adult").innerHTML = document.getElementById("adults").value;
  bookingInfo.querySelector("#booking-kid").innerHTML = document.getElementById("kids").value;
  bookingInfo.querySelector("#booking-days").innerHTML = diffDays;
  bookingInfo.querySelector("#booking-cost").innerHTML = `$${totalCost}`;
}

// Set default dates for check-in and check-out
window.addEventListener('DOMContentLoaded', () => {
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');

  // Set today's date as default for check-in
  const today = new Date().toISOString().split('T')[0];
  checkInInput.value = today;

  // Set check-out date to one day after check-in
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  checkOutInput.value = tomorrow.toISOString().split('T')[0];

  // Update check-out date when check-in date changes
  checkInInput.addEventListener('change', () => {
    const newCheckInDate = new Date(checkInInput.value);
    newCheckInDate.setDate(newCheckInDate.getDate() + 1);
    checkOutInput.min = newCheckInDate.toISOString().split('T')[0];
    checkOutInput.value = newCheckInDate.toISOString().split('T')[0];
  });
});



