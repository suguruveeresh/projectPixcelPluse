function updateContactSection(address, phone, email, hours) {
  document.getElementById('office-address').innerText = address;
  document.getElementById('office-phone').innerText = `Tel: ${phone}`;
  document.getElementById('office-email').innerText = email;
  document.getElementById('business-hours').innerHTML = hours;
}

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic updates to the contact section
  const dynamicAddress = 'Near New Sailakshmi Driving School, TNGO\'s Colony, Gachibowli, Hyderabad';
  const dynamicPhone = '+91-9030690739';
  const dynamicEmail = 'hello@pixcelpulse.com';
  const dynamicHours = '<p>Monday-Friday: 9am - 6pm</p><p>Saturday: 9am - 12nn</p>';

  updateContactSection(dynamicAddress, dynamicPhone, dynamicEmail, dynamicHours);

  // Add click event to logo to navigate to home
  document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = '#';
  });
});

document.getElementById("")
