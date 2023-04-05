// Alert user when switching to another page
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
});

// Show notification
function showNotification(message) {
  const notification = new Notification('My Website', {
    body: message
  });
}

// Check for Geolocation support
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Your location: ${latitude}, ${longitude}`);
  }, function(error) {
    console.log(`Error getting location: ${error.message}`);
  });
} else {
  console.log('Geolocation is not supported by this browser');
}

// Set a cookie with an expiration date
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Get a cookie value
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}
